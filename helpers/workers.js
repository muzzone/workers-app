module.exports.formQuery = function (requestQuery) {
    const query = {};
    requestQuery.name ? query.name = new RegExp(requestQuery.name, 'i') : null;
    requestQuery.gender ? query.gender = requestQuery.gender : null;
    requestQuery.contactInformation ? query.contactInformation = new RegExp(requestQuery.contactInformation, 'i') : null;
    requestQuery.position ? query.position = new RegExp(requestQuery.position, 'i'): null;
    requestQuery.salaryMin ? query.salary = {$gte : requestQuery.salaryMin}: null;
    requestQuery.dateFrom ? query.date = {$gte: requestQuery.dateFrom} : null;
    if (requestQuery.salaryMax) {
        !query.salary? query.salary = {} : null;
        query.salary.$lte = requestQuery.salaryMax
    }
    if (requestQuery.dateTo) {
        !query.date ? query.date = {} : null;
        query.date.$lte = requestQuery.dateTo;
    }
    if (requestQuery.search) {
        const search = new RegExp(requestQuery.search, 'i');
        query.$or = [
            {name: search},
            {position: search},
            {contactInformation: search}
        ]
    }
    return query
};
