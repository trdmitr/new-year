import Papa from "papaparse";

export default class SheetServce {
    static async getCavers() {
        // urlParse = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxL55RFLI0kryFFe90U2qnDF80CCmSyRhcZuRSlSKcMwfpjlNuf9lCUHhrpk8z09P3CtebSTaUvS7f/pub?output=csv";
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQxL55RFLI0kryFFe90U2qnDF80CCmSyRhcZuRSlSKcMwfpjlNuf9lCUHhrpk8z09P3CtebSTaUvS7f/pub?output=csv",
            {
                download: true,
                header: true,
                complete: (results) => {
                    
                    return results.data
                },
                skipEmptyLines: true,
                error: (error) => {
                    console.error(error);
                    
                }
            })
    }
}  
