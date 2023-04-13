const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

let nombre;
let correo;
let curso;
let nivel;
let costo;
let pago;

app.post('/niveles', (req, res) => {
    nombre = req.body.nombre;
    correo = req.body.correo;
    curso = req.body.curso;
    res.render('niveles', { nombre: nombre, correo: correo, curso: curso });
  });

  
  app.post('/pago', (req, res) => {

    nivel = req.body.nivel;
    nivel2 = nivel
    var costo = 0;
    console.log(typeof nivel.length)
    console.log(nivel.length)
    if (nivel2.length == 6){
      if (curso === 'Java') {
        costo = nivel2.length * 1200 / 6;
        console.log('java c '+costo + 'len ' + nivel2.length + 'type ' + typeof nivel2)
      } else if (curso === 'PHP') {
        costo = nivel2.length * 800 / 6;
        console.log('php c'+costo + 'len' + nivel2.length)
      } else if (curso === '.NET') {
        costo = nivel2.length * 1500 / 6;
        console.log('net c'+costo + 'len' + nivel2.length)
      }
    }
    else{
      
        if (curso === 'Java') {
          costo = nivel2.length * 1200;
          console.log('java c '+costo + 'len ' + nivel2.length + 'type ' + typeof nivel2)
        } else if (curso === 'PHP') {
          costo = nivel2.length * 800;
          console.log('php c'+costo + 'len' + nivel2.length)
        } else if (curso === '.NET') {
          costo = nivel2.length * 1500;
          console.log('net c'+costo + 'len' + nivel2.length)
        }
      
      
    }
    
    
    
    
    res.render('pago', { nombre, correo: correo, curso: curso , nivel, costo:costo});

    });


    app.post('/datos', (req, res) => {
    
      pago = req.body.pago;
      costo = req.body.costo;
      let metodo = "";
      
      
      if (pago === 'tarjeta') {
        metodo = "Tarjeta de credito";
        
      } else if (pago === 'efectivo') {
        metodo = "Efectivo";
      } 
    if (metodo === 'Efectivo') {
      costo = costo - (costo * 0.1);
    }
      res.render('datos', { nombre, correo, curso , nivel,costo, metodo:metodo});
  
      });
app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
});
