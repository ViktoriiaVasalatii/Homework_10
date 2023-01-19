function gradeLabs(labs) {
  try {
    for (let i=0; i < labs.length; i++) {
        let lab = labs[i];
        let result = lab.runLab(5);
        console.log(`${lab.student} code worked: ${result === 5}`);
     }
  } catch (error) {
    console.log("Error thrown");
  }
  }
 
 let studentLabs = [
    {
       student: 'Ann',
       runLab: function (number) {
          return number;
       }
    },
    {
       student: 'Mark',
       runLab: function (number) {
          return number - 2 ;
       }
    }
 ];

 let studentLabs2 = [
    {
       student: 'Kate',
       run: function (number) {
          return number;
       }
    },
    {
       student: 'Jeck',
       runLab: function (num) {
          return number - 2;
       }
    },
 ];
 
 gradeLabs(studentLabs2)