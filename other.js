const nextPage = document.getElementById('nextPage')
const rightP = document.getElementById('rightP')
console.log(nextPage)

let idx = 1

nextPage.addEventListener('click', changeDisplay)


function changeDisplay(e){
    if(idx){
        rightP.innerHTML = `
        <p>Dear _____,</p>
        <p>My name is Alex Rowland, and I am submitting my application for the ______ position at _____.&nbsp;&nbsp;I am a recent graduate from General Assembly’s Web Development Immersive program, and also hold degrees in Economics and Music from Wesleyan University.&nbsp;&nbsp;I am proficient in _____(skills listed on job requirements), and am excited to work in ______(other skills listed on job requirements).</p>
        <p>I recently created a web application that checks current surfing conditions along the California coast. The application allows users search for nearby spots based off any address within 30 miles of the coast, and to leave comments about each spot they visit. &nbsp;Since then, I have been building a social network application using MongoDB, Express, React, Redux, and Node.</p>
          <a href="mailto:Arowland900@gmail.com">Arowland900@gmail.com</a>, 1-(818)-223-1625
        </p>
        `
        idx = 0
    } else {
        rightP.innerHTML = `
        <p style="text-align: left;">Dear Clutter Hiring Manager,</p>
        <p style="text-align: left;">My name is Alexander Rowland, and I am submitting my application for
            the Junior Software Engineer position at Clutter.&nbsp;&nbsp;I spoke recently with David
            Feinerman and let him know that I would be applying.&nbsp;&nbsp;((add specific clutter interest
            info here))</p>
        <p style="text-align: left;">I am a Full Stack Software Engineer working primarily in the MERN
            Stack, and am excited to work with more languages and technologies as my career
            advances.&nbsp;&nbsp;Currently, I am co-teaching an immersive web development program at General
            Assembly, a program which I attended earlier this year. As a teacher, it is my job to explain a
            variety of programming topics such that both the strongest and weakest students in class can
            understand the material.&nbsp;&nbsp;I particularly enjoy watching my students tackle problems in
            their own unique ways with the tools we have learned.</p>
        <!-- <p style="text-align: left;">I recently created a web application that checks current surfing conditions along the California coast. The application allows users to search for nearby spots based off any address within 30 miles of the coast, and to leave comments about each spot they visit.&nbsp;&nbsp;You can view my work at github.com/arowland900.</p> -->
        <a href="mailto:arowland900@gmail.com">arowland900@gmail.com</a>, 1-(818)-223-1625
        `
        idx = 1
    }

}
