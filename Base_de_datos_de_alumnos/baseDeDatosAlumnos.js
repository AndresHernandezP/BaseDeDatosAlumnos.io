let grades11 = 0
let grades12 = 0
let grades13 = 0
let grades41 = 0
let grades21 = 0
let grades22 = 0
let grades23 = 0
let grades42 = 0
let grades31 = 0
let grades32 = 0
let grades33 = 0
let grades43 = 0
let arrayOfStudent = []
let container = document.getElementById('container')
let register = 0
let counter = []
let li;
let del;
let arrAux = []
let saveData;
let ul = document.getElementById('studentList')
let cardButton;
let delAux = []
let searchByName = document.getElementById('search1')
let searchByLastName = document.getElementById('search2')
let nameSearch = document.getElementById('searchByName')
let lastNameSearch = document.getElementById('searchByLastName')
let searchReturn = document.getElementById('searchReturn')


// esta funcion es para buscar por nombre en el buscador

searchByName.addEventListener('click', () => {

    let arr = nameSearch.value.toUpperCase().split()
    let aux = 0
    for (let i = 0; i < arr[0].length; i++) {
        aux += (arr[0])[i].charCodeAt()
    }

    for (j = 0; j < arrayOfStudent.length; j++) {
        if (arrayOfStudent[j].numberOfName == aux) {

            searchReturn.innerHTML = `<div class ="container border" style="display:flex; justify-content:space-around; flex-direction: row; width:100%">  <div class = "register"> ${register} </div>   <div > Name:  ${arrayOfStudent[j].name}  </div> <div> Last Name: ${arrayOfStudent[j].surname}  </div> <div>  Age: ${arrayOfStudent[j].age} </div> <div>   Mail: ${arrayOfStudent[j].mail}</div> <input class="cardButtons" type="button" value = "🆕" id = "${j}" >  <button class="delete" value="${j}" onclick="not()"> 🚮 </button>  </div>`
        }
    }
}

)

let not = () => {

    searchReturn.style.display = 'none'
}

searchByLastName.addEventListener('click', () => {

    let arr = lastNameSearch.value.toUpperCase().split()
    let aux = 0
    for (let i = 0; i < arr[0].length; i++) {
        aux += (arr[0])[i].charCodeAt()
    }
    for (j = 0; j < arrayOfStudent.length; j++) {

        if (arrayOfStudent[j].numberOfLastName == aux) {

            searchReturn.innerHTML = `<div class ="container border" style="display:flex; justify-content:space-around; flex-direction: row; width:100%">  <div class = "register"> </div>   <div> Name:  ${arrayOfStudent[j].name}  </div> <div> Last Name: ${arrayOfStudent[j].surname}  </div> <div>  Age: ${arrayOfStudent[j].age} </div> <div>   Mail: ${arrayOfStudent[j].mail}</div> <input class="cardButtons" type="button" value = "🆕" id = "${j}" >  <button class="delete" value="${j}"> 🚮 </button>  </div>`
        }
    }
}

)


// esta funcion es para agregar nuevos alumnos y quitarlos de la lista

const enrollment = () => {
    counter.push(register)
    register += 1
    let studentFirstName = (document.getElementById('firstName').value).toUpperCase()
    let studentLastName = (document.getElementById('lastName').value).toUpperCase()
    let studentAge = document.getElementById('age').value
    let studentMail = document.getElementById('mail').value + '@university.com'
    let newStudent = new Students(studentFirstName, studentLastName, studentAge, studentMail)
    newStudent.decideYear()
    newStudent.decideMajor()
    newStudent.decideClasses()
    newStudent.decideGrades()
    newStudent.nameNumber()
    newStudent.lastNameNumber()

    arrayOfStudent.push(newStudent)
    li = document.createElement('li')
    li.innerHTML = `<div class ="list container border" style="display:flex; justify-content:space-between; flex-direction: row; ">  <div class = "register"> ${register} </div>   <div style = "width: 20%">${studentFirstName}  </div> <div style = "width: 20%">${studentLastName}  </div> <div style="width: 20%">${newStudent.year}</div> <div style = "width: 20%">${newStudent.group}</div> <div style = "width: 20%">${newStudent.gradesAverage}</div>  <input class="cardButtons" type="button" value = "🆕" id = "${arrayOfStudent.length}" >  <button class="delete" value="${arrayOfStudent.length}"> 🚮 </button>  </div>`
    li.className = arrayOfStudent.length
    ul.appendChild(li)

    cardButton = document.getElementById(arrayOfStudent.length)
    cardButton.id -= 1
    del = document.querySelectorAll('.delete')
    del.forEach((input) => {
        input.addEventListener('click', () => {

            let borrar = document.getElementsByClassName(input.value)

            borrar[0].style.display = 'none'
        })
    }
    )

}


// esta funcion es para traer de la mamoria y eliminar de la memoria


const fun = () => {
    let loadData = JSON.parse(localStorage.getItem('sd'))
    li = document.createElement('li')


    for (let j = 0; j < loadData.length; j++) {
        arrayOfStudent.push(loadData[j])
    }

    for (let i = 0; i < arrayOfStudent.length; i++) {
        register += 1
        counter.push(register)
        li = document.createElement('li')
        li.innerHTML = `<div class ="list container border" style="display:flex; justify-content:space-between; flex-direction: row; ">  <div class = "register"> ${register} </div>  <div style = "width: 20%" >${arrayOfStudent[i].name}  </div> <div style = "width: 20%">${arrayOfStudent[i].surname}</div> <div style = "width: 10%">${arrayOfStudent[i].year} </div> <div style = "width: 10%">${arrayOfStudent[i].group} </div> <div style = "width: 10%">${arrayOfStudent[i].gradesAverage} </div> <input class="cardButtons" type="button" value = "🆕" id = "${i}" >  <button class="delete" value ="${i}"> 🚮 </button>  </div>`
        li.className = i
        ul.appendChild(li)
    }

    cardButton = document.getElementById(arrayOfStudent.length - 1)
    del = document.querySelectorAll('.delete')
    del.forEach((input) => {
        input.addEventListener('click', () => {

            arrayOfStudent.splice(input.value, 1)

            let borrar = document.getElementsByClassName(input.value)
            borrar[0].style.display = 'none'
        })
    }
    )
}


window.addEventListener('load', fun)



// esta funcion es para guardar los datos en la memoria, y para poder mostrar las tarjetas



const accept = () => {

    localStorage.setItem('sd', JSON.stringify(arrayOfStudent))


    for (let i = 0; i < counter.length; i++) {

        let variable = document.getElementById(i)

        arrAux.push(variable)
    }


    arrAux[arrAux.length - 1] = cardButton

    arrAux.forEach((input) => {

        input.addEventListener('click', () => {

            let studentsCard = document.getElementById('studentCard')
            studentsCard.innerHTML =

                `<div class="card ms-5 me-2" style="width: 100%;">
            <div class="card-header" >
                Student
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item"> ${arrayOfStudent[input.id].name} ${arrayOfStudent[(input.id)].surname}  
                </li>
                <li class="list-group-item"> Age:${arrayOfStudent[input.id].age}   
                </li>
                <li class="list-group-item"> Mail:${arrayOfStudent[input.id].mail}   
                </li> 
                <li class="list-group-item"> Major:${arrayOfStudent[input.id].major}   
                </li> 
                <li class="list-group-item"> Year:${arrayOfStudent[input.id].year}   
                </li> 
                <li class="list-group-item"> Group:${arrayOfStudent[input.id].group}   
                </li> 
             <li class="list-group-item"> Grades: <br>  
                    ${arrayOfStudent[input.id].grades[0]}  <br>  
                    ${arrayOfStudent[input.id].grades[1]} <br> 
                    ${arrayOfStudent[input.id].grades[2]} 
                </li> 
                <li class="list-group-item"> Average grade:${arrayOfStudent[input.id].gradesAverage}   
                </li> 
            </ul>
        </div> `
        }
        )
    }
    )
}




// funcion para sort por nombre

byName = () => {

    let list = document.querySelectorAll('.list')
    let arr = new BinarySearchTree
    let studentList = document.getElementById('studentList')
    studentList.innerHTML = null
    studentList.className = 'd-flex flex-column'



    for (let i = 0; i < list.length; i++) {

        arr.insert(list[i].children[1].innerText)
    }

    arr.inorder(arr.root)
    let n = arr.array


    for (let j = 0; j < list.length; j++) {

        for (let k = 0; k < list.length; k++) {

            if (n[j] === list[k].children[1].innerText) {

                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;" > ${list[k].innerHTML} </div>`
            }
        }
    }
}


//funciones para el average de calificacines

gradesAverage = () => {

    let groupAverage = document.getElementById("groupAverage")
    let checkBox1 = document.getElementById("inlineCheckbox1")
    let checkBox2 = document.getElementById("inlineCheckbox2")
    let checkBox3 = document.getElementById("inlineCheckbox3")
    let checkBox4 = document.getElementById("inlineCheckbox4")
    let checkBox5 = document.getElementById("inlineCheckbox5")
    let checkBox6 = document.getElementById("inlineCheckbox6")
    let checkBox7 = document.getElementById("inlineCheckbox7")


    let counter1 = 0
    let counter2 = 0
    let counter3 = 0
    let counter4 = 0
    let counter5 = 0
    let counter6 = 0
    let counter7 = 0
    let counter8 = 0
    let counter9 = 0
    let counter10 = 0
    let counter11 = 0
    let counter12 = 0

    for (let i = 0; i < arrayOfStudent.length; i++) {

        switch (arrayOfStudent[i].group) {

            case 1:
                switch (arrayOfStudent[i].year) {
                    case 1:
                        counter1 += 1
                        grades11 += arrayOfStudent[i].gradesAverage
                        break;
                    case 2:
                        counter2 += 1
                        grades21 += arrayOfStudent[i].gradesAverage
                        break;
                    case 3:
                        counter3 += 1
                        grades31 += arrayOfStudent[i].gradesAverage

                    default:
                        counter4 += 1
                        grades41 += arrayOfStudent[i].gradesAverage
                };

                break;

            case 2:

                switch (arrayOfStudent[i].year) {
                    case 1:
                        counter5 += 1
                        grades12 += arrayOfStudent[i].gradesAverage
                        break;
                    case 2:
                        counter6 += 1
                        grades22 += arrayOfStudent[i].gradesAverage
                        break;
                    case 3:
                        counter7 += 1
                        grades32 += arrayOfStudent[i].gradesAverage
                        break;
                    default:
                        counter8 += 1
                        grades42 += arrayOfStudent[i].gradesAverage
                };

                break;

            case 3:

                switch (arrayOfStudent[i].year) {
                    case 1:
                        counter9 += 1
                        grades13 += arrayOfStudent[i].gradesAverage
                        break;
                    case 2:
                        counter10 += 1
                        grades23 += arrayOfStudent[i].gradesAverage
                        break;
                    case 3:
                        counter11 += 1
                        grades33 += arrayOfStudent[i].gradesAverage
                        break;
                    default:
                        counter12 += 1
                        grades43 += arrayOfStudent[i].gradesAverage
                };
        }
    }
    grades11 /= counter1
    grades12 /= counter5
    grades13 /= counter9
    grades41 /= counter4
    grades21 /= counter2
    grades22 /= counter6
    grades23 /= counter10
    grades42 /= counter8
    grades31 /= counter3
    grades32 /= counter7
    grades33 /= counter11
    grades43 /= counter12


    if (checkBox1.checked) {
        if (checkBox5.checked) {
            groupAverage.innerHTML += `<div> Grades of the first Year Group 1: ${grades11} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the first Year Group 2: ${grades12} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the first Year Group 3: ${grades13} </div>`
        }
    }

    if (checkBox2.checked) {
        if (checkBox5.checked) {
            groupAverage.innerHTML += `<div> Grades of the Second Year Group 1: ${grades21} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the Second Year Group 2: ${grades22} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the Second Year Group 3: ${grades23} </div>`
        }
    }

    if (checkBox3.checked) {
        if (checkBox5.checked) {
            groupAverage.innerHTML += `<div> Grades of the  Third Year Group 1: ${grades31} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the Third Year Group 2: ${grades32} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the Third Year Group 3: ${grades33} </div>`
        }
    }
    if (checkBox4.checked) {
        if (checkBox5.checked) {
            groupAverage.innerHTML += `<div> Grades of the Fourth Year Group 1: ${grades41} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the Fourth Year Group 2: ${grades42} </div>`
        }
        if (checkBox6.checked) {
            groupAverage.innerHTML += ` <div> Grades of the Fourth Year Group 3: ${grades43} </div>`
        }
    }

}

    //funciones para los sorts

    byLastName = () => {

        let list = document.querySelectorAll('.list')
        let arr = new BinarySearchTree

        let studentList = document.getElementById('studentList')
        studentList.innerHTML = null
        studentList.className = 'd-flex flex-column'



        for (let i = 0; i < list.length; i++) {

            arr.insert(list[i].children[2].innerText)
        }

        arr.inorder(arr.root)
        let n = arr.array


        for (let j = 0; j < list.length; j++) {
            for (let k = 0; k < list.length; k++) {
                if (n[j] === list[k].children[2].innerText) {
                    studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;" > ${list[k].innerHTML} </div>`
                }
            }
        }
    }

    byYear = () => {

        let list = document.querySelectorAll('.list')
        let studentList = document.getElementById('studentList')
        studentList.innerHTML = null
        studentList.className = 'd-flex flex-column'

        for (let j = 0; j < list.length; j++) {

            if (Number(list[j].children[3].innerText) === 1) {
                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;"> ${list[j].innerHTML} </div>`
            }
        }
        for (let k = 0; k < list.length; k++) {
            if (Number(list[k].children[3].innerText) === 2) {
                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;"> ${list[k].innerHTML} </div>`
            }
        }

        for (let h = 0; h < list.length; h++)
            if (Number(list[h].children[3].innerText) === 3) {
                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;"> ${list[h].innerHTML} </div>`
            }
        for (let i = 0; i < list.length; i++)
            if (Number(list[i].children[3].innerText) === 4) {
                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;"> ${list[i].innerHTML} </div>`
            }

    }



    byGroup = () => {

        let list = document.querySelectorAll('.list')
        let studentList = document.getElementById('studentList')
        studentList.innerHTML = null
        studentList.className = 'd-flex flex-column'

        for (let j = 0; j < list.length; j++) {
            if (Number(list[j].children[4].innerText) === 1) {
                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;"> ${list[j].innerHTML} </div>`
            }
        }
        for (let k = 0; k < list.length; k++) {
            if (Number(list[k].children[4].innerText) === 2) {
                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;"> ${list[k].innerHTML} </div>`
            }
        }

        for (let h = 0; h < list.length; h++)
            if (Number(list[h].children[4].innerText) === 3) {
                studentList.innerHTML += `<div class="d-flex flex-row "  style= "justify-content: space-around;"> ${list[h].innerHTML} </div>`
            }

    }



