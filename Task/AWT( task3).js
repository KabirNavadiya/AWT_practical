
const CSPIT = {
    departments: ['CE', 'IT', 'CS', 'EC', 'EE', 'CL','ME'],
    yearOfEstablishment: 2000,
    location: 'Changa',
  
    getAllDetails() {
      console.log(`Institute Details`);
      console.log(`Year of Establishment: ${this.yearOfEstablishment}`);
      console.log(`Location: ${this.location}`);
     console.log(`Departments: ${this.departments.join(', ')}`);
    },
  };    
  
  CSPIT.CE = Object.create(CSPIT);
  CSPIT.CE.totalStudents = 250;
  CSPIT.CE.totalFaculty = 30;


  CSPIT.getAllDetails();
  console.log('');
  

  console.log(`Department Details`);
  console.log(`Total Students: ${CSPIT.CE.totalStudents}`);
  console.log(`Total Faculty: ${CSPIT.CE.totalFaculty}`);
  console.log('');
  
 
  console.log(`Department Names using for...in loop:`);
  console.log('');
  for (const department in CSPIT) {
    if(  department !== 'getAllDetails'){
      console.log(department +':'+ CSPIT[department]);
     }
  }
  console.log('');
  

  console.log(`Department Names using for...of loop:`);
  for (const department of CSPIT.departments) {
    console.log(department);
  }
  