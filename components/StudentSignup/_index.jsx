import React, { useState, useRef } from 'react';
import Signature from './Signature';
import ToastError from './_ToastError';
import DialogSuccess from './_DialogSuccess';
import {
	Heading,
	Container,
	TheForm,
	InputContainer,
	InputWrapper,
	Input,
	Select,
	TextArea,
	ButtonContainer,
	Button,
	TextBox,
	SectionHeading,
	Label,
	SectionSubHeading,
	CheckBoxContainer,
	CheckBoxWrapper,
	InfoText,
	ErrorText
} from './StudentSignup.styles';
import { 
    formInit,
	errorStateInit,
	checkAge,
	cleanUpPhone,
	validateForm,
	createCompiledData,
    phonePlaceholder, 
    checkPhonePattern,
	emailPattern,
    genderArr,
    instrumentsArr,
    singOptArr,
    howHearArr,
    paymentsArr, 
} from './_utils';
import Link from 'next/link';


//  name, weeksInterested, gender, birthdate, experience, instruments (played), instruments (to learn), sing?, how hear, parent names, contact #'s, emergency contact (name, phone), email, payment options
// camper name, DOB, med conditions/allergies, dr. name/phone, emergency contacts (name, phone)
// release of liability: parent name, signature, date (all X2?)
// credit card info?
function StudentSignup({ eventDates, token }) {
	const formattedDates = eventDates.map((eventObj) => {
		const start = new Date(eventObj.startTime).toLocaleDateString();
		const end = new Date(eventObj.endTime).toLocaleDateString();
		return { start, end, _id: eventObj._id };
	});

	const formRef = useRef();

	const [formData, setFormData] = useState(formInit);
	const [errorState, setErrorState] = useState(errorStateInit);

	const [signature, setSignature] = useState('');

	const [sigModalOpen, setSigModalOpen] = useState(false);

	// aux state for additional options
    const [addEmCnt, setAddEmCnt] = useState(false);
    const [addParent, setAddParent] = useState(false);
	const [useContactForEmr, setUseContactForEmr] = useState(false);
	const [hasErrorSubmit, setHasErrorSubmit] = useState(false);
	const [successSignup, setSuccessSignup] = useState(false);
	//const [hasServerError, setServerError] = useState(false);

	// phone input
	function handlePhone(e) {
		const { value, name, id } = e.target;
		// check if input contains space
		setFormData(val => (
			{
				...val, 
				[name]: { 
					...val[name], [id]: value.length > 0 && isNaN(value[value.length-1]) ? cleanUpPhone(val[name][id]) : cleanUpPhone(value),
				},
				// conditional update if use same parent contact info
				...(useContactForEmr && name === 'contactNumbers' && { emergencyContacts: {
					...val.emergencyContacts, 
					emC1Ph: value.length > 0 && isNaN(value[value.length-1]) ? cleanUpPhone(val.emergencyContacts.emC1Ph) : cleanUpPhone(value),
				}, }),
			}
		));
	}

	// regular text input
	function handleInput(e) {
		const { name, value, id } = e.target;

		if (name === 'emergencyContacts') {
			return setFormData({
				...formData,
				emergencyContacts: {
					...formData.emergencyContacts,
					[id]: value,
				},
			});
		}

		if (name === 'parent1' || name === 'parent2') {
			return setFormData({
				...formData,
				parentNames: {
					...formData.parentNames,
					[name]: value,
				},
				// conditional update if use same parent contact info
				...(name === 'parent1' && useContactForEmr && { emergencyContacts: {
					...formData.emergencyContacts, emC1Name: value,
				}, }),
			});
		}

		setFormData({
			...formData,
			[name]: value,
		});
	}

	// checkbox input
	function handleCheckboxInput(e) {
		const { name, value } = e.target;

		if (e.target.checked) {
            setFormData({ 
                ...formData, 
                [name]: [...formData[name], value]
            });
		} else {
            setFormData({ 
                ...formData, 
                [name]: formData[name].filter(item => item !== value)
            });
		}
	}

	// capture signature
	function captureSig(canvasRef) {
		setFormData({
			...formData,
			signatureDataURL: canvasRef.current
				.getTrimmedCanvas()
				.toDataURL('image/png'),
		});
	}

	// add student
	async function handleAddStudent(e) {
		e.preventDefault();
		// check errors
		setHasErrorSubmit(false);
		const [errors, errorCounts] = validateForm(formData);
		console.log(errorCounts)
		if (errorCounts > 0) {
			setErrorState(errors);
			setHasErrorSubmit(true);
			formRef.current && formRef.current.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
			return;
		}

		const compiledData = createCompiledData(formData, signature, addParent, addEmCnt);
		
		//console.log(formData.contactNumbers.phone1, compiledData.contactNumbers.phone1)
		//console.log(formData.emergencyContacts.emC1Ph, compiledData.emergencyContacts.emC1Ph)
		//return console.log('adding student...', compiledData);

		try {
			const response = await fetch(`/api/students`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(compiledData),
			});

			const addData = await response.json();
			console.log(addData);
			if (addData.data && addData.data === true) {
				setFormData(formInit);
				setErrorState(errorStateInit);
				setSignature('');
				setSuccessSignup(true);
			} else {
				const { errors } = addData;
				if (errors) {
					setHasErrorSubmit(true);
					setErrorState(errors);
					// if there is custom error object from server scroll to top of form
					formRef.current && formRef.current.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
					return;
				}
				// in case there is network or server error
				throw new Error('server error');
			}

		} catch (err) {
			console.error(err.name, err.message);
			// temp alert in case of server / network error
			alert('there\'s an error... please try again later...')
		}
	}

	return (
		<Container>
			{sigModalOpen ? (
				<Signature
					captureSig={captureSig}
					setSigModalOpen={setSigModalOpen}
					signature={signature}
					setSignature={setSignature}
				/>
			) : null}
			<Heading>Summer Camp Registration</Heading>
			<hr className='border-alternative-400  w-1/12 text-center mx-auto mt-6 mb-16' />
			<TextBox>
				<InfoText>
					Rockademy's summer rock camps are designed for musicians of ages 7 to 17. 
					<br />
					Basic proficiency on your instrument is required. 
                    <br />
                    Get prepared -&nbsp;
					<Link href="/lessons">Contact us now for private lessons in preparation.</Link>
				</InfoText>
				<br />
				<InfoText>
					This is Rock n Roll immersion at its funnest! 
					<br />
					Create a set of your favorite songs along with other musicians to learn and perform for your family and friends. 
					<br />
					The learning curve is exponential!
				</InfoText>
			</TextBox>
			<br />

			<TheForm ref={formRef}>

				{/* STUDENT INFO */}
				{/* ============ */}
				<SectionHeading>CAMPER INFO</SectionHeading>
				{/* STUDENT NAME AND BDAY */}
				<hr className='border-alternative-400  w-1/12 text-center mx-auto mb-10' />

                {/* STUDENT NAME */}
                <InputWrapper>
                    <Label htmlFor='studentName'>Camper's Name: *</Label>
					<ErrorText>{errorState.studentName}</ErrorText>
                    <Input
                        id='studentName'
                        name='studentName'
                        placeholder={'Camper\'s Name'}
                        value={formData.studentName}
                        onChange={handleInput}
						onBlur={e => {
							const { value } = e.target;
							if (value.trim().length === 0) {
								setErrorState({ ...errorState, studentName: 'Please enter a name' });
							} else {
								setErrorState({ ...errorState, studentName: '' });
							}
						}}
                    />
                </InputWrapper>

				<InputContainer>
                    {/* STUDENT GENDER RADIO CHECKBOX */}
                    <InputWrapper>
                        <Label htmlFor='gender'>Gender: *</Label>
						<ErrorText>{errorState.gender}</ErrorText>
                        <Select
                            id='gender'
                            name='gender'
                            onChange={handleInput}
                            value={formData.gender}
							onBlur={e => {
								const { value } = e.target;
								if (value.length === 0) {
									setErrorState({ ...errorState, gender: 'Please select an option' });
								} else {
									setErrorState({ ...errorState, gender: '' });
								}
							}}
                        >
                            <option disabled defaultValue value=''>
                                Select an option
                            </option>
                            {genderArr.map((opt) => {
                                return (
                                    <option key={opt.value} value={opt.name}>
                                        {opt.name}
                                    </option>
                                );
                            })}
                        </Select>
						
                    </InputWrapper>
					
					{/* STUDENT AGE */}
					<InputWrapper>
						<Label htmlFor='birthday'>Age: *</Label>
						<ErrorText>{errorState.age}</ErrorText>
						<Input
							id='age'
							type='number'
							name='age'
							min={1}
							max={500}
							value={formData.age}
							onChange={e => {
								const { value } = e.target;
								setFormData(val => ({
									...val, 
									age: (value.length > 0 && isNaN(value[value.length - 1])) ? val.age : value, 
								}))
							}}
							// onChange={handleInput}
							onBlur={e => {
								const { value } = e.target;
								if (value.length === 0) {
									setErrorState({ ...errorState, age: 'Please enter an age' });
								} else if (!checkAge(value)) {
									setErrorState({ ...errorState, age: 'Please enter a valid age' });
								} else {
									setErrorState({ ...errorState, age: '' });
								}
							}}
						/>
					</InputWrapper>

					{/* STUDENT BIRTHDAY */}
					{/* <InputWrapper>
						<Label htmlFor='birthday'>Date of Birth: *</Label>
						<ErrorText>{errorState.birthday}</ErrorText>
						<Input
							id='birthday'
							type='date'
							name='birthday'
							value={formData.birthday}
							onChange={e => setFormData({
								...formData,
								birthday: checkDate(e.target.value),
							})}
							// onChange={handleInput}
							onBlur={e => {
								const { value } = e.target;
								if (value.length === 0) {
									setErrorState({ ...errorState, birthday: 'Please select a date' });
								} else {
									setErrorState({ ...errorState, birthday: '' });
								}
							}}
						/>
					</InputWrapper> */}
                    
				</InputContainer>

                {/* DATES INTERESTED IN CHECKBOXES*/}
				<InputWrapper>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<SectionSubHeading>Week(s) interested in: *</SectionSubHeading>
						<ErrorText>{formData.weeksInterested.length === 0 && errorState.weeksInterested}</ErrorText>
						<CheckBoxContainer>
							{formattedDates.map((dateObj) => {
								return (
									<CheckBoxWrapper key={dateObj._id}>
										
										<Label htmlFor={dateObj._id}>
											<input
												id={dateObj._id}
												onChange={handleCheckboxInput}
												name='weeksInterested'
												type='checkbox'
												value={dateObj._id}
											/>
											&nbsp;{dateObj.start} - {dateObj.end}
										</Label>
									</CheckBoxWrapper>
								);
							})}
						</CheckBoxContainer>
					</div>
				</InputWrapper>
				
				{/* STUDENT PREVIOUS EXPERIENCE TEXTAREA */}
				<InputWrapper>
					<Label htmlFor='experience'>
						Do you have any previous musical experience?
					</Label>
					<ErrorText>{errorState.experience}</ErrorText>
					<TextArea
						id='experience'
						onChange={handleInput}
						value={formData.experience}
						name='experience'
						placeholder='Previous Experience (if any)'
                        style={{ resize: 'none' }}
					/>
				</InputWrapper>
				{/* STUDENT INSTRUMENT PLAYED / WANT TO LEARN */}
				<InputWrapper>
					<Label htmlFor='instrumentsPlayed'>
						Please list the instrument(s) you play (if any):
					</Label>
					<ErrorText>{errorState.instrumentsPlayed}</ErrorText>
					<Input
						value={formData.instrumentsPlayed}
						id='instrumentsPlayed'
						name='instrumentsPlayed'
						placeholder='Instruments(s) you play'
						onChange={handleInput}
					/>
				</InputWrapper>
				<InputWrapper>
					<SectionSubHeading htmlFor='instrumentsToPlay'>
						Please select instrument(s) you want to play: *
					</SectionSubHeading>
					<ErrorText>{formData.instrumentsToPlay.length === 0 && errorState.instrumentsToPlay}</ErrorText>
					<CheckBoxContainer>
						{instrumentsArr.map((opt) => {
							return (
								<CheckBoxWrapper key={opt.name}>
									
									<Label htmlFor={opt.name}>
										<input
											id={opt.name}
											onChange={handleCheckboxInput}
											name='instrumentsToPlay'
											type='checkbox'
											value={opt.name}
											className='mr-1'
										/>
										&nbsp;{opt.name}
									</Label>
								</CheckBoxWrapper>
							);
						})}
					</CheckBoxContainer>
				</InputWrapper>

				{/* DO YOU SING RADIO BOXES */}
				<InputWrapper>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Label htmlFor='sing'>Do you sing? * </Label>
						<ErrorText>{errorState.sing}</ErrorText>
						<InputContainer>
							<Select
								id='sing'
								name='sing'
								onChange={handleInput}
								value={formData.sing}
								onBlur={e => {
									const { value } = e.target;
									if (value.length === 0) {
										setErrorState({ ...errorState, sing: 'Please select a sing option' });
									} else {
										setErrorState({ ...errorState, sing: '' });
									}
								}}
							>
								<option defaultValue value='' disabled>
									Select an option
								</option>
								{singOptArr.map((ans) => {
									return (
										<option value={ans.name} key={ans.value}>
											{ans.name}
										</option>
									);
								})}
							</Select>
						</InputContainer>
					</div>
				</InputWrapper>

                {/* HOW DID YOU HEAR ABOUT US DROPDOWN */}
				<InputWrapper>
					<Label htmlFor='howHear'> How did you hear about Rockademy? * </Label>
					<ErrorText>{errorState.howHear}</ErrorText>
					<Select
						id='howHear'
						value={formData.howHear}
						name='howHear'
						onChange={handleInput}
						onBlur={e => {
							const { value } = e.target;
							if (value.length === 0) {
								setErrorState({ ...errorState, howHear: 'Please select an option' });
							} else {
								setErrorState({ ...errorState, howHear: '' });
							}
						}}
					>
						<option disabled defaultValue value=''>
							Select an Option 
						</option>
						{howHearArr.map((ans) => {
							return (
								<option key={ans.value} value={ans.name}>
									{ans.name}
								</option>
							);
						})}
					</Select>
					<br />
					{/* <Label htmlFor='howHearDetails'>Additional Details:</Label> */}
                    {formData.howHear.includes('Other') ?
                        (<>
							<ErrorText>{formData.howHear.includes('Other') && errorState.howHearDetails}</ErrorText>
							<Input
								value={formData.howHearDetails}
								onChange={handleInput}
								name='howHearDetails'
								id='howHearDetails'
								type='text'
								placeholder='Additional details here'
								onBlur={e => {
									const { value } = e.target;
									if (value.trim().length === 0) {
										setErrorState({ ...errorState, howHearDetails: 'Please provide some details' });
									} else {
										setErrorState({ ...errorState, howHearDetails: '' });
									}
								}}
							/>
						</>) : 
                        null
                    }
					
				</InputWrapper>
				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}

                {/* PARENT INFO */}
				{/* =========== */}

				{/* PARENT/GUARDIAN NAMES */}
                <SectionHeading>PARENT/GUARDIAN CONTACT INFO</SectionHeading>
                <hr className='border-alternative-400  w-1/12 text-center mx-auto mb-10' />
                {/* PARENT 1 CONTACT */}
                <InputContainer>
                    <InputWrapper>
                        <Label htmlFor='parent1'>Parent / Guardian Name *</Label>
						<ErrorText>{errorState['parentNames.parent1']}</ErrorText>
                        <Input
                            id='parent1'
                            type='text'
                            value={formData.parentNames.parent1}
                            name='parent1'
                            onChange={handleInput}
                            placeholder='Name'
							onBlur={e => {
								const { value } = e.target;
								if (value.trim().length === 0) {
									setErrorState({ ...errorState, 'parentNames.parent1': 'Please provide a parent/guardian name' });
								} else {
									setErrorState({ ...errorState, 'parentNames.parent1': '', ...(useContactForEmr && { 'emergencyContacts.emC1Name': ''}), });
								}
							}}
                        />
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor='phone1'>Parent / Guardian Phone *</Label>
						<ErrorText>{errorState['contactNumbers.phone1']}</ErrorText>
                        <Input
                            type='tel'
                            id='phone1'
                            pattern='[0-9]*'
                            name='contactNumbers'
                            onChange={handlePhone}
                            value={formData.contactNumbers.phone1}
                            placeholder={phonePlaceholder()}
                            maxLength='10'
							onBlur={e => {
								const { value } = e.target;
								if (!checkPhonePattern.test(value)) {
									setErrorState({ ...errorState, 'contactNumbers.phone1': 'Please provide a valid parent/guardian phone' });
								} else {
									setErrorState({ ...errorState, 'contactNumbers.phone1': '', ...(useContactForEmr && { 'emergencyContacts.emC1Ph': ''}), });
								}
							}}
                        />						
                    </InputWrapper>
                </InputContainer>

                {/* Add Parent_Guardian Checkbox */}
                <CheckBoxWrapper>
                    <input
                        id='add_parent'
                        onChange={() => setAddParent(!addParent)}
                        type='checkbox'
                        value={addParent}
                    />
                    <Label htmlFor='add_parent'> &nbsp; add another parent / guardian (optional)</Label>
                </CheckBoxWrapper>
                
                {/* PARENT 2 CONTACT */}
                {addParent && (<InputContainer>
                    <InputWrapper>
                    <Label htmlFor='parent2'>Parent / Guardian Name</Label>
					<ErrorText>{errorState['parentNames.parent2']}</ErrorText>
					<Input
						id='parent2'
						type='text'
						value={formData.parentNames.parent2}
						name='parent2'
						onChange={handleInput}
						placeholder='Name'
					/>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor='phone2'>Parent / Guardian Phone</Label>
						<ErrorText>{errorState['contactNumbers.phone2']}</ErrorText>
                        <Input
                            type='tel'
                            id='phone2'
                            pattern='[0-9]*'
                            name='contactNumbers'
                            onChange={handlePhone}
                            value={formData.contactNumbers.phone2}
                            placeholder={phonePlaceholder()}
                            maxLength='10'
							onBlur={e => {
								const { value } = e.target;
								if (value.trim().length > 0 && value.trim().length !== 10) {
									setErrorState({ ...errorState, 'contactNumbers.phone2': 'Please provide a valid contact phone number' });
								} else {
									setErrorState({ ...errorState, 'contactNumbers.phone2': '' });
								}
							}}
                        />
                    </InputWrapper>
                </InputContainer>)}

				<InputWrapper>
					<Label htmlFor='email'>Email (will be used for communication): *</Label>
					<ErrorText>{errorState.email}</ErrorText>
					<Input
						type='email'
						name='email'
						onChange={handleInput}
						value={formData.email}
						id='email'
						placeholder='Email'
						onBlur={e => {
							const { value } = e.target;
							if (value.trim().length === 0) {
								setErrorState({ ...errorState, email: 'Please provide an email' });
							} else if (value.length > 255 || !emailPattern.test(value)) { 
								setErrorState({ ...errorState, email: 'Please provide a valid email' });
							} else {
								setErrorState({ ...errorState, email: '' });
							}
						}}
					/>
				</InputWrapper>

				{/* EMERGENCY CONTACT AND MEDICAL INFO */}
				{/* ================================== */}

				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>EMERGENCY CONTACT INFO</SectionHeading>
				{/* CONTACT PH #'S */}
				<hr className='border-alternative-400  w-1/12 text-center mx-auto mb-10' />
				{/* EM CONTACT 1 */}
				<>
					<InputWrapper>
						<InputContainer>
							<Label htmlFor='emC1Name'>Emergency Contact Name *</Label>
							{/* Use Contact for Emergency Checkbox */}
							<CheckBoxWrapper>
								<input
									id='use_contact_emergency'
									onChange={(e) => {
										setUseContactForEmr(val => !val)
										if (e.target.checked) {
											setFormData({
												...formData, emergencyContacts: { 
													...formData.emergencyContacts, 
													emC1Name: formData.parentNames.parent1,
													emC1Ph: formData.contactNumbers.phone1,
												}
											})
										} 
									}}
									type='checkbox'
									value={useContactForEmr}
								/>
								<Label htmlFor='use_contact_emergency'> &nbsp; same as contact </Label>
								</CheckBoxWrapper>
						</InputContainer>
						
						<ErrorText>
							{(!useContactForEmr || 
								(useContactForEmr && formData.parentNames.parent1 === '')) && 
								errorState['emergencyContact.emC1Name']
							}
						</ErrorText>
						<Input
							style={{ marginBottom: 5 }}
							value={useContactForEmr ? formData.parentNames.parent1 : formData.emergencyContacts.emC1Name}
							onChange={handleInput}
							name='emergencyContacts'
							type='text'
							id='emC1Name'
							placeholder='Emergency Contact Name'
							disabled={useContactForEmr}
							onBlur={e => {
								const { value } = e.target;
								if (value.trim().length === 0) {
									setErrorState({ ...errorState, 'emergencyContact.emC1Name': 'Please provide an emergency contact name' });
								} else {
									setErrorState({ ...errorState, 'emergencyContact.emC1Name': '' });
								}
							}}
						/>
						
					</InputWrapper>	
					<InputContainer>
						<InputWrapper>
							<Label htmlFor='emC1Ph'>Emergency Contact Phone *</Label>
							<ErrorText>
								{(!useContactForEmr || 
									(useContactForEmr && formData.contactNumbers.phone1 === '')) && 
									errorState['emergencyContact.emC1Ph']
								}
							</ErrorText>
							<Input
								style={{ marginBottom: 5 }}
								type='tel'
								id='emC1Ph'
								pattern='[0-9]*'
								name='emergencyContacts'
								onChange={handlePhone}
								value={useContactForEmr ? formData.contactNumbers.phone1 : formData.emergencyContacts.emC1Ph}
								placeholder={phonePlaceholder()}
								disabled={useContactForEmr}
								maxLength='10'
								onBlur={e => {
									const { value } = e.target;
									if (value.trim().length === 0 || value.trim().length !== 10) {
										setErrorState({ ...errorState, 'emergencyContact.emC1Ph': 'Please provide a valid emergency phone' });
									} else {
										setErrorState({ ...errorState, 'emergencyContact.emC1Ph': '' });
									}
								}}
							/>
						</InputWrapper>
						<InputWrapper>
							<Label htmlFor='emC1Relationship'>Emergency Contact Relationship</Label>
							<ErrorText>{errorState['emergencyContacts.emC1Relationship']}</ErrorText>
							<Input
								style={{ marginBottom: 5 }}
								value={formData.emergencyContacts.emC1Relationship}
								onChange={handleInput}
								name='emergencyContacts'
								type='text'
								id='emC1Relationship'
								placeholder='Relationship to Student'
							/>
						</InputWrapper>
					</InputContainer>
				</>	
				
				{/* Add Emergency Contact Checkbox */}
                <CheckBoxWrapper>
                    <input
                        id='add_emergency_contact'
                        onChange={() => setAddEmCnt(!addEmCnt)}
                        type='checkbox'
                        value={addEmCnt}
                    />
                    <Label htmlFor='add_emergency_contact'> &nbsp; add another emergency contact (optional)</Label>
                </CheckBoxWrapper>

				{/* EM CONTACT 2 */}
				{addEmCnt && (
					<>
						<InputWrapper>
							<Label htmlFor='emC2Name'>Emergency Contact Name</Label>
							<ErrorText>{errorState['emergencyContacts.emC2Name']}</ErrorText>
							<Input
								style={{ marginBottom: 5 }}
								value={formData.emergencyContacts.emC2Name}
								onChange={handleInput}
								name='emergencyContacts'
								type='text'
								id='emC2Name'
								placeholder='Emergency Contact Name'
							/>
						</InputWrapper>
						<InputContainer>
							<InputWrapper>
								<Label htmlFor='emC2Ph'>Emergency Contact Phone</Label>
								<ErrorText>{errorState['emergencyContacts.emC2Ph']}</ErrorText>
								<Input
									style={{ marginBottom: 5 }}
									type='tel'
									id='emC2Ph'
									pattern='[0-9]*'
									name='emergencyContacts'
									onChange={handlePhone}
									value={formData.emergencyContacts.emC2Ph}
									placeholder={phonePlaceholder()}
									maxLength='10'
									onBlur={e => {
										const { value } = e.target;
										if (value.trim().length > 0 && value.trim().length !== 10) {
											setErrorState({ ...errorState, 'emergencyContacts.emC2Ph': 'Please provide a valid emergency contact phone' });
										} else {
											setErrorState({ ...errorState, 'emergencyContacts.emC2Ph': '' });
										}
									}}
								/>
							</InputWrapper>
							<InputWrapper>
								<Label htmlFor='emC2Relationship'>Emergency Contact Relationship</Label>
								<ErrorText>{errorState['emergencyContacts.emC2Relationship']}</ErrorText>
								<Input
									style={{ marginBottom: 5 }}
									value={formData.emergencyContacts.emC2Relationship}
									onChange={handleInput}
									name='emergencyContacts'
									type='text'
									id='emC2Relationship'
									placeholder='Relationship to Student'
								/>
							</InputWrapper>
						</InputContainer>
					</>)
				}

				{/* DOCTOR / MEDICAL INFO */}
				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>EMERGENCY MEDICAL AND PHYSICIAN INFO</SectionHeading>
				{/* CONTACT PH #'S */}
				<hr className='border-alternative-400  w-1/12 text-center mx-auto mb-10' />
                
                <InputWrapper>
                    <Label htmlFor='medicalConditions'>
						Please list any medical conditions or allergies (if any)
					</Label>
					<ErrorText>{errorState['medical.conditions']}</ErrorText>
                    <TextArea
                        id='medicalConditions'
                        value={formData.medical.conditions}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                medical: { ...formData.medical, conditions: e.target.value },
                            })
                        }
                        type='text'
                        placeholder='Medical conditions or allergies (if any)'
						style={{ resize: 'none' }}
                    />
                </InputWrapper>
                    
                <InputWrapper>
                    <Label htmlFor='medications'>
						Please list any medications the student is taking (if any)
					</Label>
					<ErrorText>{errorState['medical.medications']}</ErrorText>
                    <TextArea
                        id='medications'
                        value={formData.medical.medications}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                medical: { ...formData.medical, medications: e.target.value },
                            })
                        }
                        type='text'
                        placeholder='Medications taking (if any)'
						style={{ resize: 'none' }}
                    />
                </InputWrapper>

				<InputContainer>
					<InputWrapper>
						<Label htmlFor='physicianName'>Physician Name</Label>
						<ErrorText>{errorState['physicianContact.name']}</ErrorText>
						<Input
							type='text'
							name='physicianContact'
							placeholder='Physician Name'
							value={formData.physicianContact.name}
							onChange={(e) =>
								setFormData({
									...formData,
									physicianContact: { ...formData.physicianContact, name: e.target.value },
								})
							}
						/>
					</InputWrapper>
					<InputWrapper>
						<Label htmlFor='physicianPhone'>Physician Phone</Label>
						<ErrorText>{errorState['physicianContact.phone']}</ErrorText>
						<Input
							id='phone'
							type='tel'
							pattern='[0-9]*'
							name='physicianContact'
							onChange={handlePhone}
							value={formData.physicianContact.phone}
							placeholder={phonePlaceholder()}
							maxLength='10'
							onBlur={e => {
								const { value } = e.target;
								if (value.trim().length > 0 && value.trim().length !== 10) {
									setErrorState({ ...errorState, 'physicianContact.phone': 'Please provide a valid physician phone' });
								} else {
									setErrorState({ ...errorState, 'physicianContact.phone': '' });
								}
							}}
						/>
					</InputWrapper>
				</InputContainer>

				{/* PAYMENT OPTIONS */}
				{/* =============== */}
				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>PAYMENT INFO</SectionHeading>
				<hr className="border-alternative-400  w-1/12 text-center mx-auto mb-10'" />
				<InputContainer>
					<InputWrapper>
						<Label htmlFor='paymentMethod'>Select a payment method: *</Label>
						<ErrorText>{errorState.paymentMethod}</ErrorText>
						<Select
							id='paymentMethod'
							name='paymentMethod'
							onChange={handleInput}
							value={formData.paymentMethod}
							style={{ width: '100%' }}
							onBlur={e => {
								const { value } = e.target;
								if (value.length === 0) {
									setErrorState({ ...errorState, paymentMethod: 'Please select a payment method' });
								} else {
									setErrorState({ ...errorState, paymentMethod: '' });
								}
							}}
						>
							<option defaultValue value='' disabled>
								Select an option
							</option>

							{paymentsArr.map((ans, idx) => {
								return (
									<option value={ans.name} key={ans.value}>
										{ans.name}
									</option>
								);
							})}
						</Select>
					</InputWrapper>
					{formData.paymentMethod === 'Venmo' ? (
						<InputWrapper>
							<Label htmlFor='venmo'>Venmo Username</Label>
							<ErrorText>{errorState.venmo}</ErrorText>
							<Input
								onChange={handleInput}
								id='venmo'
								name='venmo'
								type='text'
								placeholder='Venmo'
								onBlur={e => {
									const { value } = e.target;
									if (value.trim().length <= 1 || value.trim().length > 255) {
										setErrorState({ ...errorState, venmo: 'Please provide a valid venmo username' });
									} else {
										setErrorState({ ...errorState, venmo: '' });
									}
								}}
							/>
						</InputWrapper>
					) : null}
				</InputContainer>
				{/* RELEASE OF LIABILITY */}
				{/* ==================== */}

				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>RELEASE OF LIABILITY</SectionHeading>
				<hr className='border-alternative-400  w-1/12 text-center mx-auto mb-10' />
				<TextBox>
					<p className='text-justify'>
						I hereby grant approval to said child's participation in all rock
						camp activities. If I choose, on the final day of each camp I grand
						permission for my child to be transported by The Rockademy
						counselors to the performance venue. I assume all risks and hazards
						incidental to such participation and do hereby waive, release,
						absolve, indemnify and afree to hold harmless The Rockademy and
						other campers and counselors. I grant counselors the right to obtain
						medical care when neither parent nor guardian is available to grant
						authorization for emergency treatment.
					</p>
					<br />
					<InputWrapper>
						<input
							id='liabilityCheck'
							type='checkbox'
							checked={formData.liabilityCheck}
							onChange={(e) =>
								setFormData({ ...formData, liabilityCheck: e.target.checked })
							}
						/>
						<Label htmlFor='liabilityCheck'>
							&nbsp;I have read and understand the above release and agree to
							all terms.
						</Label>
						<ErrorText>{errorState.liabilityCheck}</ErrorText>
					</InputWrapper>
				</TextBox>

				{signature.length === 0 ? (
					<ButtonContainer>
						<Button
							disabled={!formData.liabilityCheck || signature.length > 0}
							onClick={(e) => {
								e.preventDefault();
								setSigModalOpen(true);
							}}
						>
							{signature.length > 0 ? 'Signature Accepted' : 'Sign Form'}
						</Button>
					</ButtonContainer>
				) : null}
				<hr className='border-alternative-400  w-2/3 text-center mx-auto my-10' />
				{signature.length > 0 ? (
					<>
						<img style={{ width: '35%', margin: '0 auto' }} src={signature} />
						<ButtonContainer>
							<Button
								className='mr-3 border-gray-500'
								onClick={(e) => {
									e.preventDefault();
									setSignature('');
								}}
							>
								Clear Signature
							</Button>
							<Button onClick={handleAddStudent}>Submit form</Button>
						</ButtonContainer>
					</>
				) : null}
			</TheForm>
			
			{ hasErrorSubmit && <ToastError setOpen={setHasErrorSubmit} /> }
			{ successSignup && <DialogSuccess setOpen={setSuccessSignup} /> }
		</Container>
	);
}

export { StudentSignup };

