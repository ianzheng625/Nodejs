var klass = require('./klass')

klass.add('Ian', ['甲','乙'])


//若将此模块暴露出去
// exports.add = function(klasses) {
//     klasses.forEach(function(item, index){
//         var _klass = item
//         var teacherName = item.teacherName
//         var students = item.students

//         klass.add(teacherName,students)
//     })

// }