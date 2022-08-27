



     <div>
                    <form>
                        <input type="email" value={email} onChange={handleChange} />
                        <input type="text" placeholder='Full Name' value={fullName} name={fullName} onChange={handleChange}/>
                        <input type="number" placeholder='Contact Number' name='number' value={number} />
                        <div>
                        <div><h3>Number Of People</h3></div>
                        <div>
                            <div>+</div>
                            <div>2</div>
                            <div>-</div>
                        </div>
                        </div>
                        <input placeholder='Departure Date' type="date" value={date} name={date}  />
                        <button>Submit Details</button>
                    </form>
                </div>