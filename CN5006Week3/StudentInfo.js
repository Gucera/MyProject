const DateOfBirth = () => {
    return "20.07.2004"
}

const getStudentName = () => {
    return "Yavuz"
}

const getCampusName = () => {
    return("UEL campus")
}

exports.getName = getStudentName

exports.Location = getCampusName

exports.dob = DateOfBirth

exports.StudentGrade = (marks) => {
    if(marks > 50 && marks <= 70) return ("B Grade")
        else return ("A Grade")
    }
