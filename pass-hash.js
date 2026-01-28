import bcrypt from 'bcrypt'

async function hashPasword(){
    
    const myPassword = "danelmateomantilla";
    
    //primer parametro contraseña
    //segundo parametro numero de veces que hay que encriptar
    //este metodo es asyncrono
    const hash = await bcrypt.hash(myPassword, 11);
    console.log(hash);
}

hashPasword();

