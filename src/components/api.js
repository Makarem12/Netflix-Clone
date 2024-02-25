export async function addMovieToDatabase(movieData) {
    try {
        const serverURL = `http://localhost:3001/addMovie`;
        const res = await fetch(serverURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movieData),
        });
        if (!res.ok) {
            throw new Error('Failed to add movie to database');
        }
        const jsonRes = await res.json();
        console.log(jsonRes);
        return jsonRes;
    } catch (error) {
        console.error('Error adding movie to database:', error);
        throw error;
    }
}
