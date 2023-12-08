function setCopyrightInformation() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  let copyrightText = `Copyright © ${currentYear}. All rights reserved. | Icons from icons8.com`;

  let copyrightContent = document.getElementById("copyrightInformation");
  copyrightContent.innerHTML = copyrightText;
}

setCopyrightInformation();
