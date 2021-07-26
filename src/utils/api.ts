import axios from "axios";

const findBucketListById = async (id: string): Promise<string[]> => {
  try {
    const response = await axios.get(`http://localhost:8000/bucket-list/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return [
      "Error trying to retrieve your bucket list... ",
      "Check the console for more details.",
    ];
  }
};

export default findBucketListById;
