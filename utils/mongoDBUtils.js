// replace <username>, <password>, <cluster>, and <database> with your own values
const uri = "mongodb+srv://admin:admin@cluster0.6ofne0f.mongodb.net/?retryWrites=true&w=majority";

// create a Mongoose model for the user schema


export const sendDataToServer = async (data) => {
    try {

        if (data == null) {
            return res.status(400).json({ msg: 'No data , authorization denied' });
        } else {
            console.log(data._id)
        }



        const response = await fetch('http://192.168.0.153:3000/api/mydata', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        console.log("data sent to server")

        if (!response.ok) {
            console.log(response);
            throw new Error('Failed to save data');
        }

        console.log("data sent to server")
        return "200";

    } catch (error) {
        console.error("mongoUtils  " + error);
    }
};
