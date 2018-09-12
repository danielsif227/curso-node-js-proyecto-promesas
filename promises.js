const opositores = [{
  id: 1,
  nombre: 'Pepe',
  especialidad: 'Informática'
}, {
  id: 2,
  name: 'Leyre',
  especialidad: 'Sistemas y aplicaciones informáticas'
}]

const notas = [{
  id: 1,
  prueba: 'Práctica',
  nota: 4.5
}, {
  id: 1,
  prueba: 'Teórica',
  nota: 6.5
}, {
  id: 2,
  prueba: 'Práctica',
  nota: 3.5
}, {
  id: 2,
  prueba: 'Teórica',
  nota: 6.5
}
]

// crea promesa para obtener los datos del opositor 1
const getOpositor = (id) => {
  return new Promise((resolve, reject) => {
    const opositor = opositores.find((opositor) => opositor.id === id)
    if (opositor) {
      resolve(opositor)
    } else {
      reject(new Error(`No se ha encontrado al opositor con id: ${id}.`))
    }
  })
}

getOpositor(1).then((opositor) => {
  console.log(opositor)
}).catch((e) => {
  console.log(e)
})

// crea promesa para obtener las notas del opositor 1
const getNotas = (id) => {
  return new Promise((resolve, reject) => {
    const notasOpositor = notas.filter((nota) => nota.id === id)
    if (notasOpositor) {
      resolve(notasOpositor)
    } else {
      reject(new Error(`No se ha encontrado notas del opositor con id: ${id}.`))
    }
  })
}

getNotas(1).then((notasOpositor) => {
  console.log('Notas opositor: ' + notasOpositor)
  console.log(`Notas opositor: ${notasOpositor}`)
  console.log(notasOpositor)
}).catch((e) => {
  console.log(e)
})

// crea promesa para obtener el nombre y las notas del opositor1
const getResultado_v1 = (id) => {
  let opositor
  return getOpositor(id).then((data) => {
    opositor = data
    return getNotas(opositor.id)
  }).then((notas) => {
    let media = 0
    if (notas.length > 0) {
      media = notas.map((nota) => nota.nota).reduce((a, b) => a + b) / notas.length
    }
    return `${opositor.nombre} tiene una media de ${media} en la oposición de ${opositor.especialidad}`
  })
}

getResultado_v1(1).then( (opositorYNotas) => {
  console.log(opositorYNotas)
}).catch((e) => {
  console.log(e)
})

// ASYNC-AWAIT para obtener el nombre y las notas del opositor1
// async devuelve una Promesa
const getResultado = async (id) => {
  const opositor = await getOpositor(id)
  const notas = await getNotas(id)

  const arrayValues = await Promise.all([opositor, notas])

  if (notas.length > 0) {
    media = notas.map((nota) => nota.nota).reduce((a, b) => a + b) / notas.length
  }
  return `ASYNC-AWAIT: ${opositor.nombre} tiene una media de ${media} en la oposición de ${opositor.especialidad}`
}

getResultado(1).then(data => console.log(data))
