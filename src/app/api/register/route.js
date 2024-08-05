import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from "bcryptjs"


export async function POST(request) {
  try {
    await dbConnect();
    const { email, password, confirmpassword } = await request.json();

    if (password !== confirmpassword) {
      return new Response(JSON.stringify({ error: 'Passwords do not match' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newUser = new User({
      email,
      password,
      confirmpassword,
    });
    
    const salt =  await bcrypt.genSalt(10)
    const hashpassword = await bcrypt.hash(password, salt)
    const confirmhashpass =  await bcrypt.hash(confirmpassword, salt)
    newUser.password = hashpassword
    newUser.confirmpassword = confirmhashpass
    await newUser.save();
    
    return new Response(
      JSON.stringify({ message: 'User registered successfully' }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      },
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
