//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];


function getAverageGrade(student, course) {
  let e = student.transcript.filter((ele) => {
    return ele.course===course;
  })
  if (!e[0])
    return -1;

  let avg=0
  e[0].grades.forEach((ele) => {
    avg+=ele
  })

  return avg/e[0].grades.length
}

function getAssignmentMark(student, course, num) {
  let e = student.transcript.filter((ele) => {
    return ele.course===course;
  })
  if (!e[0])
    return -1;

  return e[0].grades[num]
}

function averageAssessment(students, courseName, assignment) {
  let avg = 0
  let count = 0
  students.forEach((stud) => {
    let v = getAssignmentMark(stud, courseName, assignment)
    if (v!=-1) {
      avg+=v
      count++
    }
  })
  return avg/count
} 


console.log(getAverageGrade(bob, 'INFO 1603'))
console.log(getAssignmentMark(sally, 'INFO 1601', 0))
console.log(averageAssessment(students, 'INFO 1601', 0))