class Students {

    constructor(name, surname, age, mail) {

       
        this.highSchoolGrade = Math.floor(Math.random() * 11)
        this.name = name
        this.surname = surname
        this.age = age
        this.mail = mail
        this.group = Math.floor(Math.random() * (4 - 1) + 1)
        this.classArray = []
        this.classes = null
        this.year = null
        this.grades = []
        this.major = null
        this.gradesAverage = null
        this.numberOfName = null
        this.numberOfLastName = null
        this.groupGrades = null
    }

    nameNumber() {
        let arr = this.name.toUpperCase().split()
        let aux = 0
        for (let i = 0; i < arr[0].length; i++) {
           aux += (arr[0])[i].charCodeAt()
        }
       this.numberOfName = aux
    }

    lastNameNumber() {
        let arr = this.surname.toUpperCase().split()
        let aux = 0
        for (let i = 0; i <  arr[0].length; i++) {
            aux += (arr[0])[i].charCodeAt()
        }
        this.numberOfLastName = aux
    }

    
    decideMajor() {
        if (this.highSchoolGrade < 6) {
            this.major = 'Economy'
        }
        else if (this.highSchoolGrade < 9) {
            this.major = 'Laws'
        }
        else {
            this.major = 'Medicine'
        }
    }

    decideYear() {
        switch (this.age) {
            case '17': this.year = 1
                break;
            case '18': this.year = 2
                break;
            case '19': this.year = 3
                break;
            default:
                this.year = 4
        }
    }

    decideClasses() {


        switch (this.major) {

            case 'Economy':

                switch (this.year) {
                    case 1:
                        this.classes = ['Introduction to Econ', 'Statistics 1', ' Capital Vol 1']
                        break;
                    case 2:
                        this.classes = ['Medium Econ', 'Statistics 2', ' Capital Vol 2']
                        break;
                    case 3:
                        this.classes = ['Advance Econ', 'Statistics 3', ' Capital Vol 3']
                        break;
                    default:
                        this.classes = [' Super Advance Econ', 'Statistics 4', ' Capital Vol 3.1']
                };
                break;

            case 'Laws':

                switch (this.year) {
                    case 1:
                        this.classes = ['Introduction to law', 'How to sue', ' Laws for Idiots vol 1']
                        break;
                    case 2:
                        this.classes = ['Medium law', 'How to defend', ' Laws for Idiots vol 2']
                        break;
                    case 3:
                        this.classes = ['Advance law', 'Throwing away your humanity', ' Laws for Idiots vol 3',]
                        break;
                    default:
                        this.classes = ['Super advance law', 'How to take your clients money', ' Laws for Idiots vol 4']
                };
                break;

            case 'Medicine':

                switch (this.year) {
                    case 1:
                        this.classes = ['Please don´t kill me', 'Whats a hearth?', ' Medicine for fools vol 1']
                        break;
                    case 2:
                        this.classes = ['Please save me', 'Whats a long?', 'Medicine for fools vol 2']
                        break;
                    case 3:
                        this.classes = ['Please make a miracle', 'HWhats a kidney?', ' Medicine for fools vol 3']
                        break;
                    default:
                        this.classes = ['Please revive me', 'Whats a brain? ', ' Medicine for fools vol 4']
                };

        }
    }


   



    decideGrades() {
        let howSmart = Math.floor(Math.random() * 3)
        switch (howSmart) {
            case 0: this.classArray = [Math.floor(Math.random() * 6), Math.floor(Math.random() * 6), Math.floor(Math.random() * 3)]
                break;
            case 1: this.classArray = [Math.floor(Math.random() * (9 - 6) + 6), Math.floor(Math.random() * (8 - 6) + 6), Math.floor(Math.random() * (8 - 6) + 6)]
                break;
            default: this.classArray = [Math.floor(Math.random() * (11 - 9) + 9), Math.floor(Math.random() * (11 - 9) + 9), Math.floor(Math.random() * (11 - 9) + 9)]
        }
        for (let i = 0; i < this.classes.length; i++) {
            this.grades[i] = ` ${this.classes[i]} : ${this.classArray[i]}`
        }
        let aux = (Number(this.classArray[0]) + Number(this.classArray[1]) + Number(this.classArray[2])) / 3
        
        this.gradesAverage = Number(Math.round(aux +'e2')+'e-2'); // 1.01
    }
}





class Node {
    constructor (datum) {
        this.datum = datum;
        this.left = null;
        this.right = null;
        
    }
}


class BinarySearchTree {
    constructor () {
        this.root = null;
        this.array=[]
    }

    insert (datum) {
        let newNode = new Node(datum);
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }


    insertNode (node, newNode) {
     
        if (newNode.datum.charCodeAt() < node.datum.charCodeAt()) {
       
            if (node.left === null) {
                node.left = newNode
            }
        
            else {
                this.insertNode(node.left, newNode)
            }
        }

       
        else {
       
            if(node.right === null) {
                node.right = newNode
            }
         
            else {
                this.insertNode(node.right, newNode)
            }
        }
    }


    remove (datum) {
     
        this.root = this.removeNode(this.root, datum)
    }


    removeNode (node, datum) {
     
        if (node === null) {
            return null
        }
   
        else if (datum < node.datum) {
            node.left = this.removeNode(node.left, datum)
            return node
        }
      
        else if (datum > node.datum) {
            node.right = this.removeNode(node.right, datum)
            return node
        }
      
        else {
       
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

       
            if (node.left === null) {
                node = node.right
                return node
            }
        
            else if (node.right === null) {
                node = node.left
                return node
            }

          
            let aux = this.findMinNode(node.right)
            node.datum = aux.datum

            node.right = this.removeNode(node.right, aux.datum)
            return node
        }
    }

  
    findMinNode (node) {
      
        if (node.left === null) {
            return node
        } else {
            return this.findMinNode(node.left)
        }
    }

  
    getRootNode () {
        return this.root
    }

 
    search (node, datum) {
      
        if (node === null) {
            return null
        }
        else if(datum < node.datum) {
            return this.search(node.left, datum)
        }
      
        else if(datum > node.datum) {
            return this.search(node.right, datum)
        }
       
        else {
            return node
        }
    }

   
    preOrder(node){
        if (node !== null){
            console.log(node.datum)
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }

    postOrder(node){
        if (node !== null){
            this.postOrder(node.left)
            this.postOrder(node.right)
            console.log(node.datum)
        }
    }

    inorder(node) {
        if (node !== null) {
            this.inorder(node.left)
            this.array.push(node.datum)
            this.inorder(node.right)  
        
        }
       
    }
}




