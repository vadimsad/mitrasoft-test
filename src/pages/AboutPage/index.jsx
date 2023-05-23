import React from 'react';
import { Card, Image, Col, Row } from 'react-bootstrap';

const AboutPage = () => {
	return (
		<>
			<Row className='justify-content-center'>
				<Col md='8'>
					<Card>
						<Card.Body className='d-md-flex d-block gap-3'>
							<Row className='w-100 flex-grow-1 mx-0 justify-content-center'>
								<Col xs='8' md='3'>
									<Image
										src='https://avatars.githubusercontent.com/u/35136145'
										className='w-100'
										rounded
									/>
								</Col>
								<Col md='9'>
									<Card.Title className='text-md-left text-center text-primary'>
										Вадим Садыков
									</Card.Title>
									<Card.Subtitle className='text-muted mb-3 text-md-left text-center'>
										Front-end developer
									</Card.Subtitle>
									<Card.Text as='div'>
										<p>
											Я начал изучать front-end разработку около 1,5 лет назад, за это время изучил
											HTML, CSS (SASS, SCSS, Bootstrap, Tailwind). В течение последних 5 месяцев я
											работал на фрилансе в команде с дизайнером. Моя работа заключалась в верстке
											сайтов по макету и установке их на CMS WordPress. Также у меня был опыт работы
											с 1С-Битрикс, где я занимался редизайном действующего интернет-магазина.
										</p>
										<p>
											На фрилансе я использовал HTML, CSS (включая препроцессоры SASS и SCSS), а
											также фреймворки Bootstrap и Tailwind для создания адаптивного и стильного
											интерфейса. А также JavaScript (включая ES5 и ES6) для добавления
											интерактивности и функциональности на веб-сайтах.
										</p>
										<p>
											В настоящее время я углубляюсь в изучение экосистемы React и активно создаю
											проекты для расширения своего портфолио. Мой стек технологий включает HTML,
											CSS (SASS, SCSS, Bootstrap, Tailwind), JavaScript (ES5, ES6), TypeScript, а
											также библиотеку React и инструменты для управления состоянием, такие как
											Redux Toolkit, Redux Thunk и Redux Saga.
										</p>
										<p>
											Я легко усваиваю новую информацию (изучу любую незнакомую технологию в течение
											3 дней), мотивирован развиваться в сфере front-end разработки и готов внести
											свой вклад в команду. У меня есть страсть к созданию эстетически
											привлекательных и пользовательских дружественных интерфейсов, а также
											стремление к изучению новых технологий и методов разработки.
										</p>
										<p>
											Я был бы рад обсудить возможность присоединиться к вашей команде и внести свой
											вклад в разработку инновационных и качественных веб-приложений.
										</p>
										<p>
											Спасибо за рассмотрение моей кандидатуры. С нетерпением жду возможности
											обсудить дальнейшие детали.
										</p>
										<div>
											Мои контакты:
											<ul>
												<li>
													Telegram:{' '}
													<a href='https://t.me/vad1msad' target='_blank'>
														@vad1msad
													</a>
												</li>
												<li>
													Email:{' '}
													<a href='mailto:sadykovvt@gmail.com' target='_blank'>
														sadykovvt@gmail.com
													</a>
												</li>
												<li>
													LinkedIn:{' '}
													<a href='https://www.linkedin.com/in/vadim-sadykov/' target='_blank'>
														vadim-sadykov
													</a>
												</li>
												<li>
													GitHub:{' '}
													<a href='https://github.com/vadimsad' target='_blank'>
														vadimsad
													</a>
												</li>
											</ul>
										</div>
										<p>С уважением, Садыков Вадим</p>
									</Card.Text>
								</Col>
							</Row>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default AboutPage;
