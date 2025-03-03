const fs = require('fs');

const files = ['index1.js', 'index2.js', 'index3.js'];
const content = 'console.log("Hello, World!");';

// Step 1: Create all files
Promise.all(files.map(file => {
    return new Promise((resolve, reject) => {
        fs.writeFile(file, content, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
})).then(() => {
    console.log('Files created successfully.');

    // Step 2: Delete all files
    return Promise.all(files.map(file => {
        return new Promise((resolve, reject) => {
            fs.unlink(file, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }));
}).then(() => {
    console.log('Files deleted successfully.');
}).catch(err => {
    console.error('Error:', err);
});
