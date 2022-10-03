import React, { useState, useRef } from "react";
import styles from "./formstyle.css"

function FormPage() {
    const baseData= {
        nama:"",
        email:"",
        noHandphone:"",
        pendidikan:"",
        kelas:"",
        harapan:""
    }

    const [data, setData] = useState(baseData);
    const suratKesungguhan = useRef(null)
    const handleInput = e =>{
        const nama = e.target.nama;
        const value = e.target.value;

        setData({
            ...data,
            [nama]: value
        })
        console.log("data",data)
    }

    return(
        <>
        <h1 className="mt-5" style={{"text-align":"center"}}> Pendaftaran Peserta Coding Bootcamp </h1>
        <form>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Nama Lengkap:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" required onChange={handleInput} value={data.nama} className={styles.input}/>
            </div>
          
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" required onChange={handleInput} value={data.email} className={styles.input}/>
            </div>
       
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">No Handphone:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" required onChange={handleInput} value={data.noHandphone} className={styles.input}/>
            </div>
     
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Latar Belakang Pendidikan:</label><br/>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                    <label class="form-check-label" for="inlineRadio1">IT</label>
                </div>
                    <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                <label class="form-check-label" for="inlineRadio2">Non IT</label>
                </div>
            </div>

            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Latar Belakang Pendidikan:</label>
                <select class="form-select" aria-label="Default select example">
                    <option value="1">Coding Backend with Golang</option>
                    <option value="2">Coding Frontend with ReactJS</option>
                    <option value="3">Fullstack developer</option>
                </select>
            </div>
            
            <div class="mb-3">
                <label for="formFileMultiple" class="form-label">Foto Surat Kesungguhan</label>
                <input class="form-control" type="file" refs={suratKesungguhan} id="formFileMultiple" multiple/>
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Harapan Untuk Coding Bootcamp ini:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <button class="btn btn-success me-3" type="submit">Submit</button>
            <input class="btn btn-danger" type="reset" value="Reset"/>
            
        </form>
        </>
    )
}

export default FormPage;