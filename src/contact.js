function contactPage() {
  const contact = document.getElementById('contact')
  const body = document.getElementById('body');
  const mainContactBox = document.createElement('div');
  mainContactBox.classList.add('mainContactBox');
  const contactMeContainer = document.createElement('div')
  contactMeContainer.classList.add('contactMeContainer')
  const contactMeText = document.createTextNode('Contact Me')

  const emailContainer = document.createElement('div');
  emailContainer.classList.add('emailContainer');
  const emailTextContainer = document.createElement('div'); 
  emailTextContainer.classList.add('emailTextContainer');
  const emailText = document.createTextNode('tptheautis@gmail.com');
  const emailIcon = document.createElement('img');
  emailIcon.classList.add('emailIcon');
  emailIcon.src = 'src/img/email.png';

  const phoneContainer = document.createElement('div');
  phoneContainer.classList.add('phoneContainer');
  const phoneTextContainer = document.createElement('div');
  phoneTextContainer.classList.add('phoneTextContainer');
  const phoneText = document.createTextNode('707-334-0591');
  const phoneIcon = document.createElement('img')
  phoneIcon.classList.add('phoneIcon');
  phoneIcon.src = 'src/img/phone.png';

  mainContactBox.append(contactMeContainer);
  contactMeContainer.append(contactMeText);
  
  mainContactBox.append(emailContainer);
  emailContainer.append(emailIcon)
  emailContainer.append(emailTextContainer);
  emailTextContainer.append(emailText);

  mainContactBox.append(phoneContainer);
  phoneContainer.append(phoneIcon)
  phoneContainer.append(phoneTextContainer);
  phoneTextContainer.append(phoneText);

  contact.onclick = function() {
  body.remove()
  body.append(mainContactBox);
  console.log('working')
  }
}



export default contactPage;