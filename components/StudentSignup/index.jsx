import React, { useState } from 'react';
import Signature from './Signature';
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
} from './StudentSignup.styles';

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
	// console.log({ formattedDates })

	const [dates, setDates] = useState(formattedDates);

	const [formData, setFormData] = useState({
		studentName: '',
		weeksInterested: [], // ARRAY OF EVENT MONGO ObjectId's
		gender: '',
		birthday: '',
		experience: '',
		instrumentsPlayed: '',
		instrumentsToLearn: [],
		sing: '',
		howHear: '',
		howHearDetails: '',
		parentNames: {
			parent1: '',
			parent2: '',
		},
		contactNumbers: {
			phone1: '',
			phone2: '',
			phone3: '',
		},
		emergencyContacts: {
			emC1Name: '',
			emC1Relationship: '',
			emC1Ph: '',

			emC2Name: '',
			emC2Relationship: '',
			emC2Ph: '',
		},
		physician: {
			name: '',
			phone: '',
		},
		medical: {
			conditions: '',
			medications: '',
		},
		email: '',
		liabilityCheck: false,
		paymentMethod: '',
		venmo: '',
	});

	const [signature, setSignature] = useState('');

	const [sigModalOpen, setSigModalOpen] = useState(false);

	Array.prototype.remove = function () {
		let what,
			a = arguments,
			L = a.length,
			ax;

		while (L && this.length) {
			what = a[--L];
			while ((ax = this.indexOf(what)) !== -1) {
				this.splice(ax, 1);
			}
		}
		return this;
	};

	function handleInput(e) {
		const { name, value, id } = e.target;

		if (name === 'emergencyContact') {
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
			});
		}

		if (name === 'phone1' || name === 'phone2' || name === 'phone3') {
			return setFormData({
				...formData,
				contactNumbers: {
					...formData.contactNumbers,
					[name]: value,
				},
			});
		}

		setFormData({
			...formData,
			[name]: value,
		});
	}

	function handleCheckboxInput(e) {
		const { name, value } = e.target;
		const formDataCopy = { ...formData };

		console.log(e.target.checked);
		if (e.target.checked) {
			formDataCopy[name].push(value);
			setFormData({ ...formDataCopy });
		} else {
			formDataCopy[name].remove(value);
			setFormData({ ...formDataCopy });
		}
	}

	function formatPhoneInput(e) {
		const key = e.charCode || e.keyCode || 0;
		const { value, name, id } = e.target;

		if (key !== 8 && key !== 9) {
			if (value.length === 3) {
				if (name === 'emergencyContact') {
					return setFormData({
						...formData,
						emergencyContacts: {
							...formData.emergencyContacts,
							[id]: value + '-',
						},
					});
				} else if (name === 'physicianPhone') {
					return setFormData({
						...formData,
						physician: {
							...formData.physician,
							phone: value + '-',
						},
					});
				}
				setFormData({
					...formData,
					contactNumbers: {
						...formData.contactNumbers,
						[name]: value + '-',
					},
				});
			}
			if (value.length === 7) {
				if (name === 'emergencyContact') {
					return setFormData({
						...formData,
						emergencyContacts: {
							...formData.emergencyContacts,
							[id]: value + '-',
						},
					});
				} else if (name === 'physicianPhone') {
					return setFormData({
						...formData,
						physician: {
							...formData.physician,
							phone: value + '-',
						},
					});
				}
				setFormData({
					...formData,
					contactNumbers: {
						...formData.contactNumbers,
						[name]: value + '-',
					},
				});
			}
		}
	}

	async function handleAddStudent(e) {
		e.preventDefault();
		const compiledData = {
			...formData,
			signature,
		};
		console.log('adding student...', { compiledData });

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
			// alert(addData.message)
		} catch (err) {
			console.error(err.message);
			alert(
				`${err.message}\n-----------------\n${Object.keys(err.errors).map(
					(er) => {
						return `${er.message}\n`;
					}
				)}`
			);
		}

		setFormData({
			studentName: '',
			weeksInterested: [], // ARRAY OF EVENT MONGO ObjectId's
			gender: '',
			birthday: '',
			experience: '',
			instrumentsPlayed: '',
			instrumentsToLearn: [],
			sing: '',
			howHear: '',
			howHearDetails: '',
			parentNames: {
				parent1: '',
				parent2: '',
			},
			contactNumbers: {
				phone1: '',
				phone2: '',
				phone3: '',
			},
			emergencyContacts: {
				emC1Name: '',
				emC1Relationship: '',
				emC1Ph: '',

				emC2Name: '',
				emC2Relationship: '',
				emC2Ph: '',
			},
			physician: {
				name: '',
				phone: '',
			},
			medical: {
				conditions: '',
				medications: '',
			},
			email: '',
			liabilityCheck: false,
			paymentMethod: '',
			venmo: '',
		});
	}

	function captureSig(canvasRef) {
		setFormData({
			...formData,
			signatureDataURL: canvasRef.current
				.getTrimmedCanvas()
				.toDataURL('image/png'),
		});
		console.log(formData);
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
			<Heading>Summer Camp Signup</Heading>
			<hr className='border-gray-600  w-1/12 text-center mx-auto mt-6 mb-16' />
			<TextBox>
				<InfoText>
					Rockademy's summer rock camps are designed for musicians of ages 7 to
					17. Basic proficiency on your instrument is required. Get prepared-
					contact us now for private lessons in preparation.
				</InfoText>
				<br />

				<InfoText>
					This is Rock n Roll immersion at its funnest! Create a set of your
					favorite songs along with other musicians to learn and perform for
					your family and friends. The learning curve is exponential!
				</InfoText>
			</TextBox>
			<br />
			<TheForm>
				<hr className='border-gray-600  w-2/6 text-center mx-auto my-10' />

				{/* PARENT INFO */}
				{/* =========== */}

				{/* PARENT/GUARDIAN NAMES */}
				<InputWrapper>
					<SectionSubHeading>Parent / Guardian Names:</SectionSubHeading>
					<InputContainer>
						<Input
							type='text'
							value={formData.parentNames.parent1}
							name='parent1'
							onChange={handleInput}
							placeholder='Name'
						/>
						<Input
							type='text'
							value={formData.parentNames.parent2}
							name='parent2'
							onChange={handleInput}
							placeholder='Name'
						/>
					</InputContainer>
				</InputWrapper>
				{/* CONTACT PHONE #'S */}
				<InputWrapper>
					<SectionSubHeading>Contact(s):</SectionSubHeading>
					<InputContainer>
						<Input
							type='tel'
							id='phone1'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							onKeyDown={formatPhoneInput}
							name='phone1'
							onChange={handleInput}
							value={formData.contactNumbers.phone1}
							placeholder='Phone 1: XXX-XXX-XXXX'
							maxLength='12'
						/>
						<Input
							type='tel'
							id='phone2'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							onKeyDown={formatPhoneInput}
							name='phone2'
							onChange={handleInput}
							value={formData.contactNumbers.phone2}
							placeholder='Phone 2: XXX-XXX-XXXX'
							maxLength='12'
						/>
						<Input
							type='tel'
							id='phone3'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							onKeyDown={formatPhoneInput}
							name='phone3'
							onChange={handleInput}
							value={formData.contactNumbers.phone3}
							placeholder='Phone 3: XXX-XXX-XXXX'
							maxLength='12'
						/>
					</InputContainer>
				</InputWrapper>
				<InputWrapper>
					<Label htmlFor='email'>Email:</Label>
					<Input
						type='email'
						name='email'
						onChange={handleInput}
						value={formData.email}
						id='email'
						placeholder='Email'
					/>
				</InputWrapper>
				{/* DATES INTERESTED IN CHECKBOXES*/}
				<InputWrapper>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<SectionSubHeading>Week(s) interested in:</SectionSubHeading>
						<CheckBoxContainer>
							{dates.map((dateObj) => {
								return (
									<CheckBoxWrapper key={dateObj._id}>
										<input
											id={dateObj._id}
											onChange={handleCheckboxInput}
											name='weeksInterested'
											type='checkbox'
											value={dateObj._id}
										/>
										<Label htmlFor={dateObj._id}>
											&nbsp;{dateObj.start} - {dateObj.end}
										</Label>
									</CheckBoxWrapper>
								);
							})}
						</CheckBoxContainer>
					</div>
				</InputWrapper>
				{/* HOW DID YOU HEAR ABOUT US DROPDOWN */}
				<InputWrapper>
					<Label htmlFor='howHear'>
						How did you hear about Rockademy?&nbsp;
					</Label>
					<br />
					<Select
						id='howHear'
						value={formData.howHear}
						name='howHear'
						onChange={handleInput}
					>
						<option disabled defaultValue value=''>
							Please Select an Option (Additional details below)
						</option>
						{[
							'Search Engine (Google, Yahoo, etc.)',
							'Recommended by friend',
							'Social Media',
							'Blog or publication',
							'Other (please explain)',
						].map((ans) => {
							return (
								<option key={ans} value={ans}>
									{ans}
								</option>
							);
						})}
					</Select>
					<br />
					{/* <Label htmlFor='howHearDetails'>Additional Details:</Label> */}
					<Input
						value={formData.howHearDetails}
						onChange={handleInput}
						name='howHearDetails'
						id='howHearDetails'
						type='text'
						placeholder='Additional details here'
					// style={{ visibility: formData.howHear === 'Other (please explain below)' ? 'visible' : 'hidden' }}
					/>
				</InputWrapper>
				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}

				{/* STUDENT INFO */}
				{/* ============ */}
				<SectionHeading>CAMPER INFO</SectionHeading>
				{/* STUDENT NAME AND BDAY */}
				<hr className='border-gray-600  w-1/12 text-center mx-auto mb-10' />

				<InputContainer>
					{/* STUDENT NAME */}
					<InputWrapper>
						<Label htmlFor='studentName'>Name:</Label>
						<Input
							id='studentName'
							name='studentName'
							placeholder='Camper Name'
							value={formData.studentName}
							onChange={handleInput}
						/>
					</InputWrapper>
					{/* STUDENT BIRTHDAY */}
					<InputWrapper>
						<Label htmlFor='birthday'>Date of Birth:</Label>
						<Input
							id='birthday'
							type='date'
							name='birthday'
							value={formData.birthday}
							onChange={handleInput}
						/>
					</InputWrapper>
				</InputContainer>
				{/* STUDENT GENDER RADIO CHECKBOX */}
				<InputWrapper>
					<Label htmlFor='gender'>Gender:</Label>
					<br />
					<Select
						id='gender'
						name='gender'
						onChange={handleInput}
						value={formData.gender}
					>
						<option disabled defaultValue value=''>
							Gender
						</option>
						{['Male', 'Female', 'Non-Binary', 'Rather Not Say'].map((opt) => {
							return (
								<option key={opt} value={opt}>
									{opt}
								</option>
							);
						})}
					</Select>
				</InputWrapper>
				{/* STUDENT PREVIOUS EXPERIENCE TEXTAREA */}
				<InputWrapper>
					<Label htmlFor='experience'>
						Do you have any previous musical experience?
					</Label>
					<TextArea
						id='experience'
						onChange={handleInput}
						value={formData.experience}
						name='experience'
						placeholder='Previous Experience (if any)'
					/>
				</InputWrapper>
				{/* STUDENT INSTRUMENT PLAYED / WANT TO LEARN */}
				<InputWrapper>
					<Label htmlFor='instrumentsPlayed'>
						Please list any instruments you play (if any):
					</Label>
					<Input
						type='text'
						value={formData.instrumentsPlayed}
						id='instrumentsPlayed'
						name='instrumentsPlayed'
						placeholder='Instruments(s) you play'
						onChange={handleInput}
					/>
				</InputWrapper>
				<InputWrapper>
					<SectionSubHeading htmlFor='instrumentsToLearn'>
						Instruments you want to learn:
					</SectionSubHeading>
					<CheckBoxContainer>
						{[
							'Acoustic Guitar',
							'Electric Guitar',
							'Bass Guitar',
							'Piano',
							'Vocals',
							'Drums',
							'Ukelele',
						].map((opt) => {
							return (
								<div key={opt}>
									<input
										id={opt}
										onChange={handleCheckboxInput}
										name='instrumentsToLearn'
										type='checkbox'
										value={opt}
										className='mr-1'
									/>
									<Label htmlFor='instrumentsToLearn'>&nbsp;{opt}</Label>
								</div>
							);
						})}
					</CheckBoxContainer>
				</InputWrapper>
				{/* DO YOU SING RADIO BOXES */}
				<InputWrapper>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<Label htmlFor='sing'>Do you Sing?</Label>
						<InputContainer>
							<Select
								id='sing'
								name='sing'
								onChange={handleInput}
								value={formData.sing}
							>
								<option defaultValue selected value='' disabled>
									Select an option
								</option>

								{[
									'Yes!',
									"Yes, but I'm shy!",
									"No, but I'd like to!",
									'No!',
								].map((ans, idx) => {
									return (
										<option value={ans} key={ans}>
											{ans}
										</option>
									);
								})}
							</Select>
						</InputContainer>
					</div>
				</InputWrapper>

				{/* EMERGENCY CONTACT AND MEDICAL INFO */}
				{/* ================================== */}

				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>EMERGENCY CONTACT INFO</SectionHeading>
				{/* CONTACT PH #'S */}
				<hr className='border-gray-600  w-1/12 text-center mx-auto mb-10' />
				<InputContainer>
					{/* EM CONTACT 1 */}
					<InputWrapper>
						<SectionSubHeading>Emergency Contact #1</SectionSubHeading>
						<Input
							style={{ marginBottom: 5 }}
							value={formData.emergencyContacts.emC1Name}
							onChange={handleInput}
							name='emergencyContact'
							type='text'
							id='emC1Name'
							placeholder='Emergency Contact Name'
						/>
						<Input
							style={{ marginBottom: 5 }}
							value={formData.emergencyContacts.emC1Relationship}
							onChange={handleInput}
							name='emergencyContact'
							type='text'
							id='emC1Relationship'
							placeholder='Relationship to Student'
						/>
						<Input
							style={{ marginBottom: 5 }}
							type='tel'
							id='emC1Ph'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							onKeyDown={formatPhoneInput}
							name='emergencyContact'
							onChange={handleInput}
							value={formData.emergencyContacts.emC1Ph}
							placeholder='Phone: XXX-XXX-XXXX'
							maxLength='12'
						/>
					</InputWrapper>
					{/* EM CONTACT 2 */}
					<InputWrapper>
						<SectionSubHeading>Emergency Contact #2</SectionSubHeading>
						<Input
							style={{ marginBottom: 5 }}
							value={formData.emergencyContacts.emC2Name}
							onChange={handleInput}
							name='emergencyContact'
							type='text'
							id='emC2Name'
							placeholder='Emergency Contact Name'
						/>
						<Input
							style={{ marginBottom: 5 }}
							value={formData.emergencyContacts.emC2Relationship}
							onChange={handleInput}
							name='emergencyContact'
							type='text'
							id='emC2Relationship'
							placeholder='Relationship to Student'
						/>
						<Input
							style={{ marginBottom: 5 }}
							type='tel'
							id='emC2Ph'
							pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
							onKeyDown={formatPhoneInput}
							name='emergencyContact'
							onChange={handleInput}
							value={formData.emergencyContacts.emC2Ph}
							placeholder='Phone: XXX-XXX-XXXX'
							maxLength='12'
						/>
					</InputWrapper>
				</InputContainer>

				{/* DOCTOR / MEDICAL INFO */}
				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>EMERGENCY MEDICAL INFO</SectionHeading>
				{/* CONTACT PH #'S */}
				<hr className='border-gray-600  w-1/12 text-center mx-auto mb-10' />
				<SectionSubHeading>Medical Info</SectionSubHeading>
				<InputContainer>
					<Input
						value={formData.medical.conditions}
						onChange={(e) =>
							setFormData({
								...formData,
								medical: { ...formData.medical, conditions: e.target.value },
							})
						}
						type='text'
						placeholder='Please list any medical conditions or allergies'
					/>
					<Input
						value={formData.medical.medications}
						onChange={(e) =>
							setFormData({
								...formData,
								medical: { ...formData.medical, medications: e.target.value },
							})
						}
						type='text'
						placeholder='Please list any medications the student is taking'
					/>
				</InputContainer>
				<SectionSubHeading>Physician Info</SectionSubHeading>
				<InputContainer>
					<Input
						type='text'
						placeholder='Physician Name'
						value={formData.physician.name}
						onChange={(e) =>
							setFormData({
								...formData,
								physician: { ...formData.physician, name: e.target.value },
							})
						}
					/>

					<Input
						type='tel'
						pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
						onKeyDown={formatPhoneInput}
						name='physicianPhone'
						onChange={(e) =>
							setFormData({
								...formData,
								physician: { ...formData.physician, phone: e.target.value },
							})
						}
						value={formData.physician.phone}
						placeholder='Phone: XXX-XXX-XXXX'
						maxLength='12'
					/>
				</InputContainer>

				{/* PAYMENT OPTIONS */}
				{/* =============== */}
				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>PAYMENT</SectionHeading>
				<hr className="border-gray-600  w-1/12 text-center mx-auto mb-10'" />
				<InputContainer>
					<InputWrapper>
						<Label htmlFor='paymentMethod'>Select a payment method</Label>
						<br />
						<Select
							id='paymentMethod'
							name='paymentMethod'
							onChange={handleInput}
							value={formData.paymentMethod}
							style={{ width: '100%' }}
						>
							<option defaultValue value='' disabled>
								Select an option
							</option>

							{['Venmo', 'Credit Card', 'Cheque'].map((ans, idx) => {
								return (
									<option value={ans} key={ans}>
										{ans}
									</option>
								);
							})}
						</Select>
					</InputWrapper>
					{formData.paymentMethod === 'Venmo' ? (
						<InputWrapper>
							<Label htmlFor='venmo'>Venmo Username</Label>
							<Input
								onChange={handleInput}
								id='venmo'
								name='venmo'
								type='text'
								placeholder='Venmo'
							/>
						</InputWrapper>
					) : null}
				</InputContainer>
				{/* RELEASE OF LIABILITY */}
				{/* ==================== */}

				{/* <hr className='border-gray-600  w-2/6 text-center mx-auto my-10' /> */}
				<SectionHeading>RELEASE OF LIABILITY</SectionHeading>
				<hr className='border-gray-600  w-1/12 text-center mx-auto mb-10' />
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
					</InputWrapper>
				</TextBox>

				{signature.length === 0 ? (
					<ButtonContainer>
						<Button
							disabled={signature.length > 0}
							onClick={(e) => {
								e.preventDefault();
								setSigModalOpen(true);
							}}
						>
							{signature.length > 0 ? 'Signature Accepted' : 'Sign Form'}
						</Button>
					</ButtonContainer>
				) : null}
				<hr className='border-gray-600  w-2/3 text-center mx-auto my-10' />
				{signature.length > 0 ? (
					<>
						<img style={{ width: '35%', margin: '0 auto' }} src={signature} />
						<ButtonContainer>
							<Button
								className='mr-3 border-gray-500'
								onClick={(e) => {
									e.preventDefault();
									setSignature('');
									// setSigModalOpen(true);
								}}
							// style={{ margin: '0 auto' }}
							>
								Clear Signature
							</Button>
							<Button onClick={handleAddStudent}>Submit form</Button>
						</ButtonContainer>
					</>
				) : null}
			</TheForm>
		</Container>
	);
}

export { StudentSignup };
