import Title from "../../components/Title";

function About() {
    return (  
        <>
            <Title
                main="About Us"
                sub="" 
            />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-8">
                        <p className="fs-4 fw-lighter">
                            E-Shop is a open platform that enables sellers and shopers meet and trade goods easly
                        </p>
                    </div>
                    <div className="col-6 col-md-4">
                        <div className="container mb-5">
                            <div className="card">
                                <img 
                                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQERUSExIVFhUXFRcVGBUVEhUVEhIYFRgXFhYVFRgYHSggGBolHBcVIjMhJikrLi8uGB80OTQsOCguLisBCgoKDg0OGxAQGi8lICYrLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAYCAwUHAf/EAEMQAAEDAQMHBwkGBgIDAAAAAAEAAgMRBBIhBQYTMUFRYSIycYGRobEUFVJiksHR4fAWI1NyotIkNEKCk8IzsgdUg//EABkBAQADAQEAAAAAAAAAAAAAAAABAwQCBf/EADoRAAIBAgIFCAkDBAMAAAAAAAABAgMREiEEMUFRoRNSYXGRsdHwBRQiM0KBkuHiMoLBU6LC0hUjYv/aAAwDAQACEQMRAD8A9xREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBEWp8wBprO4YlAbUXwLXJO1us9W1AbUUN9uGwdq0utjjuHV8V1hYOki5RtD/SK+ad3pFMDB1kXMFqfv7gtjbadoB7kwME9FHjtTTw6Vk+GuINDvG3p3qLA3IogtDmmjx1hSWuBFQjVgZIiKAEREAREQBERAEREAREQBERAFi5wAqV8keGipUPGU1ODQpSuDYZXPNG4Da5fbzIhTWe89K0y2iguswG/wCCirvCDfLanO4Dh8VoRF0AiIgCIiAIiIAtkUzm6j1bFrRAdGOdrxQjHdv6FrcwxGoxbtChKbZbRXku7d/Arlq2oEpjgRULNaYorpNNRxpuK3KsBERAEREAREQBERAEREAXwmi0yyYhrdZ7hvWqfEiNvWpsDAnSmpwYPrtWueeuAwaNm9LRIOa3mjvK0KxIGM0oYKlch+ddjGueL/LH+5TsqtrHT6xBXgUZFMRXDVWmzDvWWc6jqOMZWSSeq+u/gXxjBQUmr3vt3HtZzvsf/sR/5G/FYnPGx/jM9oLzS15DY10jGOf93Yxar7i0smrHFJ920NF1vLeNbub1KxfYGG/G3TS0c8tLuQATSOkbcMHnSXtuDHYYJarz+CF6fN4ss/2zsf4ze0/BPtrY/wAZvafgqFbc2GRNYwPeZJ455I6tZSPydgkMUo1h9Q9hc0ihbqIJpPtmbNljyhDZqSUkMgLNMLzQ1odFLW7UB/LF0+jWtCAlqnPfZHwIxQ5vF+JbvtpY/wAVvafgn21sf4re0/BeUZMgjtE0UQBj0k7WVvX6MlexrWjAYtBcbx51RgKY9PJ+QI3NGkc+r7d5C0sLQGOoPvXNIN8VczkgtwvY6ktU577I+BN4c3i/E9DOetj/ABW/q/agz2sf4re137V55JkhkUrYrsheyzeUTFklC+9DpNDELmAN5jL2POcabEzzzcZYXMuPc4PdMAHAVaGFl3EazdeK8Qlqn9R9kf8AUXhzeL8T0uyZ1WWVwYyVjnHU0PbeO3AHE4LssdUAjbivDckWq9boZDgTOKnCpLy7E0AFeVTAAYagvb7IeQ3oSlOpyrhJ3yvqS222CcY4MSVs7a3uNiIi1lB0LHNeFDrHeFKXHY8ggjYurG+8ARtVclYGaIi5AREQBERAEREAWuZ90ErYoNrdecGD6J+SlK7B9s5o0yHWfrxWMhuN9Z2J4KU5gw3DHs1LmzSXnE/VF0s2DBEULK9uMEd4CpLg0V1Y1OPYrESk27I3W/mdYXgjYmhzmOJBFWtpdpeBoA4uIDW66nYvZsj5SfaphE8NDSCTdBDsBUYkldPKObVmbHJJo2lwa51XMYakAnHk4rHVhUjWcopO6S121N9D3miyUVGTs8+nXbwPJsmZZiFk0UzquIms7XNaXSwwTRODqjAOaJdE4NrWl+lFOlzriknglJc0R290t0gkiAthYHGmBdRjsBU696699n4EH+JqvP2Ssn4TfYj/AGpLlo64L6vsTOlCOuXD7njsOX42whpa8yQ+VtgcCLhFrBaXS1xq2riANdcaLqZTzms7rdDahedoZWYtbz4HRsLm8qnLZIZhjSofwVgyxZooZ3xtgho0gCsTSdQOOHFdvN/N+y2iESPgjrecMI2AYHoUtVkr4F9X2EqUUruXD7nimTrToZYpQKmN7JACcCY3BwBPUrHDnNA1xOgdQWkW1gbNUacB2Di6MHR1LMAK1ZrIOF9zoyPZ7No9HBFyr9b0TDzbtKYcStGbOToJ5XMfBFQMLhdiYDUFo3cUSrYcWFfV+I5OLjixZdX3PO5M4S5t664T+T+TGVst1paBRr7gbUSABoqHUNNWKk50Zzst2BhpRxMbzIQ5l9sQeHNFQ7GPsK9Vyxm9ZYYHyMhZeaKirG01jgqxYHNdLG0xx0c9jTSNowLgCkY1pK6ivq/EiNOMldPh9zzjJ1PKYA3E6eLjUiRtSOC92sPMHX4lTW5EgGplOgkeCpltyjNHLIxshDWyPaBQYAOIGxRQpVJVscrL2ba29bT3LcSlGcMEXtvqt4ltRQ8jTukha5xqTWp30cQpi2MzNWdgptgk1t6x71CWcD7rgeK5auiDroiKoBERAEREAREQGLjQVUKxC84uP0SpFsdRh44L5Y2UZ04rpZIC2SUbTfh8VzVKtz6upuHj9BRV3HUAq7nNbmupEMS11XHYDQi73qblzKehbdaeW4eyN/TuVXs0DpXtY3FzjQde0+KthHazRRp/E/PSWDMqxOdKZtTWAt/M5w1dQ8QrHnDahFZpCdbmlgG8uFPiepScn2NsEbY26mjXtJ2k9JVRz0t9+URA4R6+LnfAU7Sql/2TIT5Spc4NmhMj2xjW5wb2mlV6uqDmbZr9ovbI2l3WeSPEnqV7e6gJOoYqazzsNIld23Hm+cEl60ykemR7NGnwVtzM/lh+dyos0he4uOtxLj1mqvWZf8t/e73LurlEsrK0LdRDz7j5ETtznN9oV/1XJzPtAZaQD/W1zOg4OH/WnWrFnnHWyk+i9p7Td/2VFgmLHNeNbXBw6QapTWKFhSWKnbrPTcp2bTQvjrS80gHcdnfReaRudG8GnKY4Gh2FprQ9YXqMMge0OGpwBHQRUKjZ4WHRz3wOTIL39wwd7j1lcUZZ2ONHlZ4WXPJ9sbPG2Rupw1bQdoPEFUvOvJhhlMgxZI4mu5xxLT3kfJbM0Mp6KTROPIkOHqv1Dt1diuNusjZo3RvGBHWDsI4hR7uRHup9BTs3cpgAQuwxN07yTW6eNTgrCqNlGxOgkMb9Y1HY4bHBWDIOVdING88saj6YHvVsltRNan8UTsoiKsznVgdVoPDwwW1RbAeTTcVJrsVT1g+oiKAEREAREQES3Y3RvPy96ktFBRaZG1kbwBK3kqXqByZ3VcTxULKVtELC44nU0ekfgpSo+X8pX53g1owlgGwUNCesrRCN3YspQxysaZpS9xc41JNSVbszMmXWmdwxdgzg3a7rPcOKqWSWtnmZFUgOdQngASeugK9Qic1oDQKAAAADAAYAJWlb2S+vKywowyjahDE+Q/0itN51AdZoF5hLIXOLnGpJJJ3k4kqzZ+ZSpo4saGrzxpg0ePcqh5U3j2KaMfZvvOqELRvvL7mTZrsLpNr3YdDMB33l1cuzXLNK71CB0u5I7ymSGNjgjYNjG9ZIqT2krn55WgCyO4uYP1A+5U/qn8zP+qp8yhq+5l/y397vcvPPKm8exX7MiYGzf/R3g1XVv0mjSF7B0s4o71llHqF3s8r3LzVeqTXXtc06nAg9YovJPKm8exc0M00c6NqaPSM0bVpLM0bWEsPVi3uI7FnnNYdNA4AcpvLb0jWOsV7lXcw8ojSyR40LL/QWkDvvdyu2lCrmnGZTNOM8jyheh5t5T8ohFTy28l3Hc7r8aqjZwMZBaHsGqocMNQcA6nVWiyzdyuIZ2EVo4hjhvDjQHqND271fOOON0aakMcbrrLrnHkkWiOrR943Fvrb2Hp8etUAEtO0EHoII8CvVdMFSc9rKyNzZm4XzdcKf1UreHSBj81XRn8JTQn8LJ2RcpiZtHc8ax6Q9ILpLzqC33HBzSQQag0V7yXbBPE2QCla4cQSD1VC7nG2ZFalhzWo6+Tjzh0e9bq/edLfAqNk7nHoW6Q/et6D71Q9ZQSkRFwAiIgCIiAxpjVfJeaegrNYvGB6EBx151l6EstMoO15cOIcbw8V6Ko1syfFNTSMDqaidY6xitMJYWW0qmB3ZSs1B/FxHYCSTuF0jHrIXpirjrHHEaRsDRhq29J1lbm2t4FLx+uKmcMdmjNW01Oo01ksjiZ/t+9jdsulp4GtadhVWY0k0AqTgBvJV6mjDwQ4BwOsHGq02ewRRmrWAHfiT1V1K2Cwqx1S9JKMLOOezVb5lnsnMb+UDsFFyc9G1srgNdWmnBpqT1Ba4rQ5vNcR4LGSQuNSa9KpjRtK5njpmGzSz83PPl6HmO2llodZe53UaUPcoHmyGtdGyvd2alNjkLTUGnQrakcasX1vSMZ2UYvpvYsErgASdQC8hljLCWnWDQ9S9BltDnc5xPgoNosEUhq5gJ34g9dNa5pQwXOaOnxhJ3WXyuc/MJn8Q52zRlteJLTTsaVfVWIImsADQGgbBh19Kkm1vIpeP1xXNSm5O6InpynJtx6ir55t/inO2ODaHfQBp7wubkthM0YHptJ6AQSewFW+0Wdkgo9ocOOzo3LGzWOOPmMArt29pVyyVjuPpJKlha9rh48C1VVX/APIH/FHwfU8AQQD2qXHantFA40+t60zcut7lV11xr01VEKTjJMpjpqi1JIoC9EzegMdmjacDQuI3XiXe9Zw5Fs7TeELa68amnQCaBTlM6mJZHo1qymrIlZP5x6Pets3/ACt6PisMnjE9Syd/zD62Eqh62ZyYiIuAEREAREQBERAcZwoaL4t1qbR57e1aVcCFbed9cVHW+3c764rQtEdSPLre8fWERF0VhERAEREAREQBERAEREAREQM6wXxAizHsHQsDeSTvKwZjMeHyCkwMutA4KPYsS531jj8FVvBMREXICIiAIiIAiIgIdvZqd1KCuu9l4EHauU9tDQ7FZB5AgW7nDo96jqRbucPraVHWqH6UeZW94zEmmKiHKUfHsUqbmnoPgp2bNhikgDnxtcanFzQTgeKmUlGN2UqM5zUItLJvM4xymzcewfFPOjNx7virg7J8AFTDH7DfgsfJItQhjruuNw6cMFXy8dzLnolXnrsKlFlFriBR2Jps+KmrLOezsZJZ7jA2pdW60CtCyladJWKtTTSaKLSjKUJO9rcUn/Ji40FTsxUQ5Sj3n2VJn5jug+C6ORsrQRwMaXGoGNI3nGp2htCok7K9rkrOVnJRy29dt6OL5yZ63Z8084N9F3s/NWjz7D6Tv8Un7VBtOVYzPC4XqNEgP3b68oClBSp1LlTb+B+fkdSpxSyqp6ti2u3OOR5Z6j/ZTyz1JOxWbz1Fuk/xP+C++eGejL/hd8FzysuZ3lnIx/qrsXiVuzWkPrQEU1gretOlD55nAEAlpo4FrhhtB1LcrTPF3XbwbR1G6lus7LzgOs9S0t1BT7MLjLx1n6AWSR7ZutDqNPRTtwSyNowcce1apwXFrT0u6voqWq9gCIigBERAEREAREQGmcGlRrGPTvCj2hoe2+3rU5Qn1jdUc07F0gca3ax0KMp+WIwHNLdRBKgLXB3ijzK/vGYy809B8F1s0f5Zv5neJXJfqPQVAyflySBmjYG3ak8oEnHWpnBzjZdBTCtGlVUparPvRdgKkkY6+Vu4NHv8dmyJhHDh7ydp+uKp32qn3M9k/FPtTP6vslVer1DSvSFBb+z7nRzv59n/ADO8WKMuZa8rSWh7L5byThTDWdvYumroxcYpPzmZXUVSpKUdTt3JGq0cx35T4Kx5Cws0X5feq3OcKb6hMq23+F0DcScTTW264Opq2/HoVNV3ah09hq0ZxhJzb2W7X579hdVzbb/M2fom/wCrVXbHlmSSzBjibwNC+9ynAaq8dW3Ytzre7SMkdyrgoAdtW3XY8ccVWoOEnfpXAuq10/Z6Yvsab7i3KNHNVzmnZXs401dfxVMyRlI1kfU/eM17Q4YN2/0gkV10I3LPKWUH6AsqSTgXEkupQ1A3YYE7ulVOErrZnn3PsNLqxU8HRl/HaSLUQbVORiDcIOw1YCslzMnNIY01xIHYMGjqFF01vT2brI8d631t9ruduxw3qbhr+ClMN99f6W6uJWsO5LY2bhU7t6lxRhooFjkz2TGJmJcdZ7hsC2oi4AREQBERAEREAREQBYPYCKFZogK9leIsLRsxp3KCutnB/R/d/quStlN3ijza/vH52Hx2oqthWVVoLRT2nnaVs+f8BERWGQ+2ZlH3t93uqrIq9Bzm/mHirCqZK2rp4u/ezdQm5Xb6F2JJcEjCTUoj7LU87uU1wqtei49y8zSaOlzqXpTSjua/F956tGpoahatTcnnmnb/ACj3EWy2QRtp30pVbiCacrAahuxrgVs0XHuTRce5UPRvSLzdWPn9hodf0e83Sl2/mQ7FY9FWjq1ABwGw1Wy02e+0trSvxqpGi49yaLj3J6t6RxYuVjfz/wCDp6VoLd3Sl5/eYQsDQBroAOzBbgVjo+PcsgMFs0SlpFPFy0k76rcfhj0bzFpdShO3Ixcdd77f7n0lpskQawU2gVPUpC1Qc1vQPBbVWbUEREJCIiAIiIAiIgCIiAIi1TIgcvLxBuf3e5cld+1WYSChwpqKg+afX/T81qpzSjZmKtRnKbaRzgq2rt5p9f8AT81CObDfSHsn9ytjWgtpiraJVnayKqitX2Zb6Q9k/uT7Mt9Ieyf3Lvl4byj/AI+vu4lag5zekeKsC3szbaCDe1GvNOz+5SvNPr/p+a4lVg9poo6JVgndcUc5F0vNHr/p+aeafX/T81zykd5fyFTdxXic1F0vNI9P9PzX3zUPTPs/NOUjvHq9TccxF0/NQ9M9ieah6R7Ao5SI9XqbjmIup5qb6R7As4smsBqSTwOpOViT6tUZ0oXi6OgeC3KMFvYKBZGj0EZIiKCQiIgCIiAIiIAiIgCIiAxuDcvmjG5ZogMNGNyaMblmiAw0YTRBZolwYaIJogs0U3IsYaIJows0S4sYaIJows0S5JhowlwblmigGOjG5Lg3LJEAREQBERAEREAREQH/2Q==" 
                                    className="card-img-top rounded img-fluid img-thumbnail"
                                    alt="Img Title"/>  
                                <div className="card-body">
                                    <p><strong>Description: </strong></p>
                                    <p><strong>Price: </strong></p>
                                    <p><strong>Phone: </strong></p>
                                    <p><strong>Product Number: </strong></p>
                                    <hr />
                                    <div className="d-flex justify-content-evenly">
                                        <button 
                                            className="btn btn-default"
                                        >
                                        <i className="bi bi-pen"></i>
                                        </button>
                                        <button 
                                            className="btn btn-default"
                                        >
                                        <i className="bi-hand-thumbs-up"></i>
                                        </button> 
                                        <button 
                                            className="btn btn-default"
                                        >
                                        <i className="bi bi-house-door"></i>
                                        </button>                            
                                    </div>  
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;