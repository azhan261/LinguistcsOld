import React from 'react'
import { useHistory } from "react-router-dom";
import { createPersonalInfos } from './apiForPersonalInfo';
import { Formik, FormikConsumer, useFormik } from 'formik'
import {Link} from 'react-router-dom'

function PersonalInformation() {
    /*const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "" },
  });*/

  /*const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });*/
  const history = useHistory()
  
  const onSubmit = async (data) => {
    console.log(data)
    await createPersonalInfos(data)
    //redirecting 
    //history.push("/")
  };

    //1 Start of by making initial values 
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            country: '',
            user: '',
            enduser: '',
            administrator: '',
            employee: '',
            unsubscribe: '',
            removecard: '',
            deletepersonalData: '',
            others: '',
            requestdetails: ''
            
        },

        //4 Make onSubmit propert to handle what happens to data on form submisison

        onSubmit: values => {

          
          //createTodo(formik.values)
          //redirecting 
          //history.push("/")

          onSubmit(formik.values)

        },

        //5 Make validation property

        validate: values => {
            
            let errors = {}

            const letters = /^[A-Za-z ]+$/;

            const cnic = /^[0-9--]+$/;

            const phone = /^[0-9]+$/;

            const symbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/;
            
            if(!values.name){
                errors.name = "Please fill in Name"
            }else if (!letters.test(values.name)) {
                errors.name = "Please enter a valid Name"
            }

    

            if(!values.email){
                errors.email = "Please fill in Email"
            }


            if(!values.country){
                errors.country = "Please select your Country"
            }else if (values.country == "chooseCountry"){
                errors.country = "Please select your Country"

            }
            if(!values.requestdetails){
                errors.requestdetails = "Please fill in Details"
            }
  
            return errors


        }


    })

    console.log("Form errors", formik.errors)
    return (
        <div>
            
      {/* Inner Page Banner Area End Here */}
            <section className="s-space-layout1 bg-accent">
                <div className="container">
                <div className="row">
                    <div className="inner-title-dark col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="section">
                        <h2 style={{textAlign: 'center'}}>Personal Information Request Webform</h2>
                        <p className="text">
                        Thank you for contacting Linguistics One Limited. This page and form is provided to enable us to support requests from individuals seeking information and action with respect to personal data we have collected for those individuals, and how we use that information. If you are contacting Linguistics One Limited for another reason, please do so on our Contact Us page
                        </p>
                        <p className="text">
                        Please use this form to request action about your personal data. Please fill out the form completely.
                        </p>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'left'}}><b>I am a (an) </b></h2>
                        <ul>
                        <li><input type="radio" name="user" value={formik.values.user} /> Consumer/ Customer/ User</li>
                        <li><input type="radio" name="enduser" value={formik.values.enduser} /> Enterprise or Education Customer Learner/ End User</li>
                        <li><input type="radio" name="adminstrator" value={formik.values.administrator} /> Enterprise or Education Customer Administrator</li>
                        <li><input type="radio" name="employee" value={formik.values.employee} /> Employee, Candidate or Contractor</li>
                        </ul>
                    </div>
                    <div className="section">
                        <h2 style={{textAlign: 'left'}}><b>Select request type</b></h2>
                        <ul>
                        <li><input type="checkbox" name="unsubscribe" value={formik.values.unsubscribe} /> Unsubscribe from marketing/ object to processing</li>
                        <li><input type="checkbox" name="removecarde" value={formik.values.removecard} /> Remove my debit/ credit card</li>
                        <li><input type="checkbox" name="deletepersonaldata" value={formik.values.deletepersonaldata} /> Delete my personal data</li>
                        <li><input type="checkbox" name="others" value={formik.values.others}/> Other request</li>
                        </ul>
                    </div>
                    <br /><br />
                    <div className="section mt-5">
                        <form onSubmit={formik.handleSubmit} >
                        <div className="col-md-6">
                            <label htmlFor>Full Name*</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                            <input type="text" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} className="form-control"  />
                            {formik.errors.name && formik.touched.name ? (<div className='error'>{formik.errors.name}</div>) : null}
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label htmlFor>Email Address</label>
                            <input type="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} className="form-control"  />
                            {formik.touched.email ? (<div className='error'>{formik.errors.email}</div>) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label htmlFor>Country of Residence*</label>
                            <select name="country" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.country} className="form-control" >
                            <option value="chooseCountry">Choose Your Country</option>                  
                                    <option data-countryCode="SD" value="Afghanistan">Afghanistan</option>
                                    <option data-countryCode="SD" value="Albania">Albania</option>
                                    <option data-countryCode="SD" value="Algeria">Algeria</option>
                                    <option data-countryCode="SD" value="Andorra">Andorra</option>
                                    <option data-countryCode="SD" value="Angola">Angola</option>
                                    <option data-countryCode="SD" value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option data-countryCode="SD" value="Argentina">Argentina</option>
                                    <option data-countryCode="SD" value="Armenia">Armenia</option>
                                    <option data-countryCode="SD" value="Australia">Australia</option>
                                    <option data-countryCode="SD" value="Austria">Austria</option>
                                    <option data-countryCode="SD" value="Azerbaijan">Azerbaijan</option>
                                    <option data-countryCode="SD" value="Bahamas">The Bahamas</option>
                                    <option data-countryCode="SD" value="Bahrain">Bahrain</option>
                                    <option data-countryCode="SD" value="Bangladesh">Bangladesh</option>
                                    <option data-countryCode="SD" value="Barbados">Barbados</option>
                                    <option data-countryCode="SD" value="Belarus">Belarus</option>
                                    <option data-countryCode="SD" value="Belgium">Belgium</option>
                                    <option data-countryCode="SD" value="Belize">Belize</option>
                                    <option data-countryCode="SD" value="Benin">Benin</option>
                                    <option data-countryCode="SD" value="Bhutan">Bhutan</option>
                                    <option data-countryCode="SD" value="Bolivia">Bolivia</option>
                                    <option data-countryCode="SD" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option data-countryCode="SD" value="Botswana">Botswana</option>
                                    <option data-countryCode="SD" value="Brazil">Brazil</option>
                                    <option data-countryCode="SD" value="Brunei">Brunei</option>
                                    <option data-countryCode="SD" value="Bulgaria">Bulgaria</option>
                                    <option data-countryCode="SD" value="Burkina Faso">Burkina Faso</option>
                                    <option data-countryCode="SD" value="Burundi">Burundi</option>
                                    <option data-countryCode="SD" value="Cambodia">Cambodia</option>
                                    <option data-countryCode="SD" value="Cameroon">Cameroon</option>
                                    <option data-countryCode="SD" value="Canada">Canada</option>
                                    <option data-countryCode="SD" value="Cape Verde">Cape Verde</option>
                                    <option data-countryCode="SD" value="Central African Republic">Central African Republic</option>
                                    <option data-countryCode="SD" value="Chad">Chad</option>
                                    <option data-countryCode="SD" value="Chile">Chile</option>
                                    <option data-countryCode="SD" value="China">China</option>
                                    <option data-countryCode="SD" value="Colombia">Colombia</option>
                                    <option data-countryCode="SD" value="Comoros">Comoros</option>
                                    <option data-countryCode="SD" value="Congo, Republic of the">Congo, Republic of the</option>
                                    <option data-countryCode="SD" value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                                    <option data-countryCode="SD" value="Costa Rica">Costa Rica</option>
                                    <option data-countryCode="SD" value="Cote d'Ivoire">Cote d'Ivoire</option>
                                    <option data-countryCode="SD" value="Croatia">Croatia</option>
                                    <option data-countryCode="SD" value="Cuba">Cuba</option>
                                    <option data-countryCode="SD" value="Cyprus">Cyprus</option>
                                    <option data-countryCode="SD" value="Czech Republic">Czech Republic</option>
                                    <option data-countryCode="SD" value="Denmark">Denmark</option>
                                    <option data-countryCode="SD" value="Djibouti">Djibouti</option>
                                    <option data-countryCode="SD" value="Dominica">Dominica</option>
                                    <option data-countryCode="SD" value="Dominican Republic">Dominican Republic</option>
                                    <option data-countryCode="SD" value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
                                    <option data-countryCode="SD" value="Ecuador">Ecuador</option>
                                    <option data-countryCode="SD" value="Egypt">Egypt</option>
                                    <option data-countryCode="SD" value="El Salvador">El Salvador</option>
                                    <option data-countryCode="SD" value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="The Gambia">The Gambia</option>
                                    <option data-countryCode="SD" value="Georgia">Georgia</option>
                                    <option data-countryCode="SD" value="Germany">Germany</option>
                                    <option data-countryCode="SD" value="Ghana">Ghana</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Korea, North">Korea, North</option>
                                    <option data-countryCode="SD" value="Korea, South">Korea, South</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option data-countryCode="SD" value="Laos">Laos</option>
                                    <option data-countryCode="SD" value="Latvia">Latvia</option>
                                    <option data-countryCode="SD" value="Lebanon">Lebanon</option>
                                    <option data-countryCode="SD" value="Lesotho">Lesotho</option>
                                    <option data-countryCode="SD" value="Liberia">Liberia</option>
                                    <option data-countryCode="SD" value="Libya">Libya</option>
                                    <option data-countryCode="SD" value="Liechtenstein">Liechtenstein</option>
                                    <option data-countryCode="SD" value="Lithuania">Lithuania</option>
                                    <option data-countryCode="SD" value="Luxembourg">Luxembourg</option>
                                    <option data-countryCode="SD" value="Macedonia">Macedonia</option>
                                    <option data-countryCode="SD" value="Madagascar">Madagascar</option>
                                    <option data-countryCode="SD" value="Malawi">Malawi</option>
                                    <option data-countryCode="SD" value="Malaysia">Malaysia</option>
                                    <option data-countryCode="SD" value="Maldives">Maldives</option>
                                    <option data-countryCode="SD" value="Mali">Mali</option>
                                    <option data-countryCode="SD" value="Malta">Malta</option>
                                    <option data-countryCode="SD" value="Marshall Islands">Marshall Islands</option>
                                    <option data-countryCode="SD" value="Mauritania">Mauritania</option>
                                    <option data-countryCode="SD" value="Mauritius">Mauritius</option>
                                    <option data-countryCode="SD" value="Mexico">Mexico</option>
                                    <option data-countryCode="SD" value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                    <option data-countryCode="SD" value="Moldova">Moldova</option>
                                    <option data-countryCode="SD" value="Monaco">Monaco</option>
                                    <option data-countryCode="SD" value="Mongolia">Mongolia</option>
                                    <option data-countryCode="SD" value="Montenegro">Montenegro</option>
                                    <option data-countryCode="SD" value="Morocco">Morocco</option>
                                    <option data-countryCode="SD" value="Mozambique">Mozambique</option>
                                    <option data-countryCode="SD" value="Myanmar (Burma)">Myanmar (Burma)</option>
                                    <option data-countryCode="SD" value="Namibia">Namibia</option>
                                    <option data-countryCode="SD" value="Nauru">Nauru</option>
                                    <option data-countryCode="SD" value="Nepal">Nepal</option>
                                    <option data-countryCode="SD" value="Netherlands">Netherlands</option>
                                    <option data-countryCode="SD" value="New Zealand">New Zealand</option>
                                    <option data-countryCode="SD" value="Nicaragua">Nicaragua</option>
                                    <option data-countryCode="SD" value="Niger">Niger</option>
                                    <option data-countryCode="SD" value="Nigeria">Nigeria</option>
                                    <option data-countryCode="SD" value="Norway">Norway</option>
                                    <option data-countryCode="SD" value="Oman">Oman</option>
                                    <option data-countryCode="SD" value="Pakistan">Pakistan</option>
                                    <option data-countryCode="SD" value="Palau">Palau</option>
                                    <option data-countryCode="SD" value="Panama">Panama</option>
                                    <option data-countryCode="SD" value="Papua New Guinea">Papua New Guinea</option>
                                    <option data-countryCode="SD" value="Paraguay">Paraguay</option>
                                    <option data-countryCode="SD" value="Peru">Peru</option>
                                    <option data-countryCode="SD" value="Philippines">Philippines</option>
                                    <option data-countryCode="SD" value="Poland">Poland</option>
                                    <option data-countryCode="SD" value="Portugal">Portugal</option>
                                    <option data-countryCode="SD" value="Qatar">Qatar</option>
                                    <option data-countryCode="SD" value="Romania">Romania</option>
                                    <option data-countryCode="SD" value="Russia">Russia</option>
                                    <option data-countryCode="SD" value="Rwanda">Rwanda</option>
                                    <option data-countryCode="SD" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option data-countryCode="SD" value="Saint Lucia">Saint Lucia</option>
                                    <option data-countryCode="SD" value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option data-countryCode="SD" value="Samoa">Samoa</option>
                                    <option data-countryCode="SD" value="San Marino">San Marino</option>
                                    <option data-countryCode="SD" value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option data-countryCode="SD" value="Saudi Arabia">Saudi Arabia</option>
                                    <option data-countryCode="SD" value="Senegal">Senegal</option>
                                    <option data-countryCode="SD" value="Serbia">Serbia</option>
                                    <option data-countryCode="SD" value="Seychelles">Seychelles</option>
                                    <option data-countryCode="SD" value="Sierra Leone">Sierra Leone</option>
                                    <option data-countryCode="SD" value="Singapore">Singapore</option>
                                    <option data-countryCode="SD" value="Slovakia">Slovakia</option>
                                    <option data-countryCode="SD" value="Slovenia">Slovenia</option>
                                    <option data-countryCode="SD" value="Solomon Islands">Solomon Islands</option>
                                    <option data-countryCode="SD" value="Somalia">Somalia</option>
                                    <option data-countryCode="SD" value="South Africa">South Africa</option>
                                    <option data-countryCode="SD" value="South Sudan">South Sudan</option>
                                    <option data-countryCode="SD" value="Spain">Spain</option>
                                    <option data-countryCode="SD" value="Sri Lanka">Sri Lanka</option>
                                    <option data-countryCode="SD" value="Sudan">Sudan</option>
                                    <option data-countryCode="SD" value="Suriname">Suriname</option>
                                    <option data-countryCode="SD" value="Swaziland">Swaziland</option>
                                    <option data-countryCode="SD" value="Sweden">Sweden</option>
                                    <option data-countryCode="SD" value="Switzerland">Switzerland</option>
                                    <option data-countryCode="SD" value="Syria">Syria</option>
                                    <option data-countryCode="SD" value="Taiwan">Taiwan</option>
                                    <option data-countryCode="SD" value="Tajikistan">Tajikistan</option>
                                    <option data-countryCode="SD" value="Tanzania">Tanzania</option>
                                    <option data-countryCode="SD" value="Thailand">Thailand</option>
                                    <option data-countryCode="SD" value="Togo">Togo</option>
                                    <option data-countryCode="SD" value="Tonga">Tonga</option>
                                    <option data-countryCode="SD" value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option data-countryCode="SD" value="Tunisia">Tunisia</option>
                                    <option data-countryCode="SD" value="Turkey">Turkey</option>
                                    <option data-countryCode="SD" value="Turkmenistan">Turkmenistan</option>
                                    <option data-countryCode="SD" value="Tuvalu">Tuvalu</option>
                                    <option data-countryCode="SD" value="Uganda">Uganda</option>
                                    <option data-countryCode="SD" value="Ukraine">Ukraine</option>
                                    <option data-countryCode="SD" value="uae">United Arab Emirates</option>
                                    <option data-countryCode="SD" value="uk">United Kingdom</option>
                                    <option data-countryCode="SD" value="United States of America">United States of America</option>
                                    <option data-countryCode="SD" value="Uruguay">Uruguay</option>
                                    <option data-countryCode="SD" value="Uzbekistan">Uzbekistan</option>
                                    <option data-countryCode="SD" value="Vanuatu">Vanuatu</option>
                                    <option data-countryCode="SD" value="Vatican City (Holy See)">Vatican City (Holy See)</option>
                                    <option data-countryCode="SD" value="Venezuela">Venezuela</option>
                                    <option data-countryCode="SD" value="Vietnam">Vietnam</option>
                                    <option data-countryCode="SD" value="Yemen">Yemen</option>
                                    <option data-countryCode="SD" value="Zambia">Zambia</option>
                                    <option data-countryCode="SD" value="Zimbabwe">Zimbabwe</option>
                            </select>
                            {formik.touched.country ? (<div className='error'>{formik.errors.country}</div>) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <label htmlFor>Request Details</label>
                            {/*2 put onChange = {formkit.handleChange} value={formik.values.name} in all the form fields with their corroposind name  in values */}
                            <input type="text" name="requestdetails" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.requestdetails} className="form-control"  />
                            {formik.errors.requestdetails && formik.touched.requestdetails ? (<div className='error'>{formik.errors.requestdetails}</div>) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                            <button className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </section> 
        </div>
    )
}

export default PersonalInformation
