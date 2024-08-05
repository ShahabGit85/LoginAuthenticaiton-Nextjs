import bcrypt from "bcryptjs";
import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';

export async function POST(request) {
  await dbConnect();
  const { email, password } = await request.json();

  try {
    const checkuser = await User.findOne({ email });

    if (!checkuser) {
      return new Response(
        JSON.stringify({ error: 'User not found' }),
        {
          status: 401,
        },
      );
    }

    const isMatch = await bcrypt.compare(password, checkuser.password);
    if (!isMatch) {
      return new Response(
        JSON.stringify({ error: 'Invalid email or password' }),
        {
          status: 401,
        },
      );
    }

    const data = {
      _id: checkuser._id,
      email: checkuser.email,
      password: checkuser.password
    };

    return new Response(
      JSON.stringify({
        message: "Login sucessfully",
        user: data
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
      }
    );
  }
}
