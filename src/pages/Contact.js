import React from 'react';

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="content">
				<div className="content-box">
					<p className="heading">Get In Touch</p>
					<p>
						Although I'm not currently looking for any new opportunities, my
						inbox is always open. So whether you have a question or want to
						say hi, I'll try my best to get back to you!
					</p>
					<a href="mailto:hello@ganesh.pw">
						<button className="say-hello-btn">Say Hello!</button>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Contact;