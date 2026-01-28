import bcrypt from 'bcrypt';

async function verifyPasword() {
    const myPassword = "danelmateomantilla"; 
    const paswordHashed = "$2b$11$o3b8QBJoZaxz3zZW4GjD3Oga5v0j/5O.0F/3/es2S4zn29j6D.vQq";
    const isMatch = await bcrypt.compare(myPassword, paswordHashed);
    console.log(isMatch);
}

verifyPasword()