function helperGetEmployerRole(employeeName, employees) {
    const employee = employees.find(emp => emp.name === employeeName);
    return employee ? employee.role : 'Employee not found';
}
  

const getEmployerRole = (employeeName, employees) => {
    return helperGetEmployerRole(employeeName, employees);
};

module.exports = getEmployerRole;
