async function display() {
    let response = await fetch("./studentData.json");
    let studentsData = await response.json();
    console.log(studentsData);

    //? map
    let section = document.createElement("section");
    document.body.append(section);

    studentsData.map((student, ind) => {
        console.log(student.sname);

        let article = document.createElement("article");

        article.innerHTML = `
                <center>
                    <h2> Stdent ID :
                        <i>
                            <u>
                    QSP2024S00${ind + 1}
                             </u>
                        </i>
                    </h2>
                </center>
                <h4>Name <i>${student.sname}</i></h4>
                <h4>10th School Name <i>${student.tenth_school_name}</i></h4>
                <h4>10th Percentage <i>${student.tenth_percentage}</i></h4>
                <h4>10th YOP <i>${student.tenth_YOP}</i></h4>
                <h4>12th College Name <i>${student.plus2_college_name}</i></h4>
                <h4>12th Percentage <i>${student.plus2_percentage}</i></h4>
                <h4>12th YOP <i>${student.plus2_YOP}</i></h4>
                <h4>Degree College Name <i>${student.Degree_college_name}</i></h4>
                <h4>Degree Percentage <i>${student.Degree_percentage}</i></h4>
                <h4>Degree YOP <i>${student.Degree_YOP}</i></h4>
                `;
    section.append(article)
     console.log(article);
               
    });
}
display();