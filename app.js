/* let la = new LinearAlgebra();
let tr = new Transformations(); */
let sol;
let terra;
let lua;
let mercurio;
let venus;
let jupiter;
let luajupiter, luajupiter2, luajupiter3;
let saturno;
let luasaturno, luasaturno2, luasaturno3;
let urano;
let luaurano, luaurano2,uranourano3; 
let plutao;
let luaplutao, luaplutao2, luaplutao3;
let netuno;
let luanetuno, luanetuno2, luanetuno3;
let marte;
let luamarte, luamerte2;
let r;
let diametroDosol = 200;
let dterraSol = 450;
let raioTerra = (1/109) * diametroDosol;

function setup(){
    frameRate(60)
    createCanvas(1500,900, WEBGL)
    //createCanvas(1200,700)
    createEasyCam();
    // figuras 2d
    //r = new rectangle(0,0, 200, 100);
    //r = new line(0,0, 100, 0)
    //r = new triangulo(50, 150, 100, 150, 75, -5)
    //r = new circulo(100,100, 50,8)
    
    //figuras 3d
    //r = new parallelogram(0,0,0,100,150,250)
    //r = new plane(50,50,50,100,0,100)
    //r = new pyramid(0,-10,0,100,0,100,-110)
    //r = new sphere(x,y,z,raio,st,se)
    //r = new sphere(0,0,0,20,20,20)
    
    //sistema solar
    sol = new sphere(0,0,0, diametroDosol,  20,20)

    mercurio = new sphere(0,0,(dterraSol+(dterraSol*0.387)),raioTerra*0.383, 20,20)

    venus = new sphere(0,0,(dterraSol+(dterraSol*0.723)),raioTerra*0.949, 20,20)

    terra = new sphere(0,0,dterraSol,raioTerra,  20,20)
    lua = new sphere(10,0,(dterraSol+(dterraSol*0.00257)),raioTerra*0.272, 20,20)

    marte = new sphere(0,0,(dterraSol+(dterraSol*1.52)),raioTerra*0.532, 20,20)
    luamarte = new sphere(10,0,(dterraSol+(dterraSol*1.52)),raioTerra*0.272, 20,20)
    luamarte2 = new sphere(0,10,(dterraSol+(dterraSol*1.52)),raioTerra*0.272, 20,20)

    jupiter = new sphere(0,0,(dterraSol+(dterraSol*5.20)),raioTerra*11.21, 20,20)
    luajupiter = new sphere(20,0,(dterraSol+(dterraSol*5.20)),raioTerra*0.272, 20,20)
    luajupiter2 = new sphere(0,15,(dterraSol+(dterraSol*5.20)),raioTerra*0.272, 20,20)
    luajupiter3 = new sphere(0,-10,(dterraSol+(dterraSol*5.20)),raioTerra*0.272, 20,20)

    saturno = new sphere(0,0,(dterraSol+(dterraSol*9.58)),raioTerra*9.45, 20,20)
    luasaturno = new sphere(10,0,(dterraSol+(dterraSol*9.58)),raioTerra*0.272, 20,20)
    luasaturno2 = new sphere(0,30,(dterraSol+(dterraSol*9.58)),raioTerra*0.272, 20,20)
    luasaturno3 = new sphere(-15,0,(dterraSol+(dterraSol*9.58)),raioTerra*0.272, 20,20)


    urano = new sphere(0,0,(dterraSol+(dterraSol*19.20)),raioTerra*4.01, 20,20)
    luaurano = new sphere(10,0,(dterraSol+(dterraSol*19.20)),raioTerra*0.272, 20,20)
    luaurano2 = new sphere(0,10,(dterraSol+(dterraSol*19.20)),raioTerra*0.272, 20,20)
    luaurano3 = new sphere(-10,0,(dterraSol+(dterraSol*19.20)),raioTerra*0.272, 20,20)


    netuno = new sphere(0,0,(dterraSol+(dterraSol*30.05)),raioTerra*3.88, 20,20)
    luanetuno = new sphere(10,0,(dterraSol+(dterraSol*30.05)),raioTerra*0.272, 20,20)
    luanetuno2 = new sphere(0,10,(dterraSol+(dterraSol*30.05)),raioTerra*0.272, 20,20)
    luanetuno3 = new sphere(-10,0,(dterraSol+(dterraSol*30.05)),raioTerra*0.272, 20,20)



    plutao = new sphere(0,0,(dterraSol+(dterraSol*39.48)),raioTerra*0.186, 20,20)
    luaplutao  = new sphere(10,0,(dterraSol+(dterraSol*39.48)),raioTerra*0.272, 20,20)
    luaplutao2  = new sphere(0,10,(dterraSol+(dterraSol*39.48)),raioTerra*0.272, 20,20)
    luaplutao3  = new sphere(-10,0,(dterraSol+(dterraSol*39.48)),raioTerra*0.272, 20,20)
}

function draw(){
    background(200)
    //point(0,0,0)
    //point(50,0,0)
    //point((0 + 100 )/2 , -150 + 50 , (0 + 100 )/2);
    //r.transpose(1,1,1)
/*      r.rotation(0.001)
    r.setColor('#f49e12')
    r.draw()
     */
    //r.rotation(1,0,0)
    //r.draw();
    //r.transpose(1,1,0);
    sol.rotation(0,0.0001,0)
    sol.draw();
    sol.setColor('#f49e12'); 

    mercurio.rotation(0,1,0)
    mercurio.draw();
    mercurio.setColor('#A8A8A8'); 

    venus.rotation(0,0.1,0)
    venus.draw();
    venus.setColor('#99CC32'); 
    
    terra.rotation(0,0.001,0)
    terra.draw();
    terra.setColor('#00009C'); 
    lua.rotation(0,0.001,0)
    lua.draw();
    lua.setColor('#CDCDCD'); 

    marte.rotation(0,0.0001,0)
    marte.draw();
    marte.setColor('#8C1717'); 

    luamarte.rotation(0,0.0001,0)
    luamarte.draw();
    luamarte2.rotation(0,0.0001,0)
    luamarte2.draw();

    jupiter.rotation(0,0.00001,0)
    jupiter.draw();
    jupiter.setColor('#97694F'); 

    luajupiter.rotation(0,0.00001,0)
    luajupiter.draw();
    luajupiter2.rotation(0,0.00001,0)
    luajupiter2.draw();
    luajupiter3.rotation(0,0.00001,0)
    luajupiter3.draw();

    saturno.rotation(0,0.000001,0)
    saturno.draw();
    saturno.setColor('#6B4226'); 
    luasaturno.rotation(0,0.000001,0)
    luasaturno.draw();
    luasaturno2.rotation(0,0.000001,0)
    luasaturno2.draw();
    luasaturno3.rotation(0,0.000001,0)
    luasaturno3.draw();


    urano.rotation(0,0.0000001,0)
    urano.draw();
    urano.setColor('#3232CD'); 
    luaurano.rotation(0,0.0000001,0)
    luaurano.draw();
    luaurano2.rotation(0,0.00000001,0)
    luaurano2.draw();
    luaurano3.rotation(0,0.0000001,0)
    luaurano3.draw();

    netuno.rotation(0,0.0000000001,0)
    netuno.draw();
    netuno.setColor('#4D4DFF'); 

    luanetuno.rotation(0,0.00000000001,0)
    luanetuno.draw();
    luanetuno2.rotation(0,0.00000000001,0)
    luanetuno2.draw();
    luanetuno3.rotation(0,0.00000000001,0)
    luanetuno3.draw();

    plutao.rotation(0,0.0000000000000001,0)
    plutao.draw();
    plutao.setColor('#FF1CAE');

    luaplutao.rotation(0,0.0000000000001,0) 
    luaplutao.draw();
    luaplutao2.rotation(0,0.000000000000001,0)
    luaplutao2.draw();
    luaplutao3.rotation(0,0.0000000000000001,0)
    luaplutao3.draw();
    
}