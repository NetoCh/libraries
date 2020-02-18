this.generateZip = function () {
    try {
        const pdfRoute = './content/reporteApl/reporte-apl/';
        const directoryFiles = fs.readdirSync(pdfRoute);
        let output = fs.createWriteStream(pdfRoute + '/ReporteGrupal.zip');
        let archive = archiver('zip', {
            zlib: { level: 9 } // Sets the compression level.
        });
        output.on('close', function () {
            console.log(archive.pointer() + ' total bytes, archiver has been finalized and the output file descriptor has closed.');
        });

        // This event is fired when the data source is drained no matter what was the data source.
        output.on('end', function () {
            console.log('Data has been drained');
        });

        // good practice to catch warnings (ie stat failures and other non-blocking errors)
        archive.on('warning', function (err) {
            if (err.code === 'ENOENT') {
                // log warning
            } else {
                // throw error
                throw err;
            }
        });
        // good practice to catch this error explicitly
        archive.on('error', function (err) {
            throw err;
        });
        archive.on('warning', function (err) {
            if (err.code === 'ENOENT') {
                // log warning
            } else {
                // throw error
                throw err;
            }
        });
        archive.pipe(output);
        directoryFiles.map(filename => {
            archive.append(fs.createReadStream(`${pdfRoute}${filename}`), { name: `${filename}` });
        });
        archive.finalize();
    } catch (err) {
        console.log(err);
    }
}