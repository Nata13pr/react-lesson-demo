import "./UserComponent.css"
import {type FC} from "react";
import type {IUser} from "../../models/user-model/IUser.ts";

type UserPropsType = {
    user: IUser
}
const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <li style={{ listStyle: 'none', marginBottom: '30px' }}>

            <div className="user-container">
                <aside className="sidebar">
                    <div className="avatar">
                        <img src={user.image} alt={user.firstName} />
                    </div>
                    <div className="role-badge">{user.role}</div>
                    <h1 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '10px 0 5px' }}>
                        {user.firstName} {user.lastName}
                    </h1>
                    <p style={{ color: "#64748b", margin: "0" }}>@{user.username}</p>

                    <div style={{ textAlign: 'left', marginTop: '30px', paddingTop: '30px', borderTop: '1px solid #f1f5f9' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <span className="label">Email</span>
                            <strong style={{ fontSize: '0.9rem' }}>{user.email}</strong>
                        </div>
                        <div style={{ marginBottom: '15px' }}>
                            <span className="label">Телефон</span>
                            <strong style={{ fontSize: '0.9rem' }}>{user.phone}</strong>
                        </div>
                        <div>
                            <span className="label">Університет</span>
                            <strong style={{ fontSize: '0.9rem' }}>{user.university}</strong>
                        </div>
                    </div>
                </aside>

                <main className="main-content">
                    <section className="info-card">
                        <h2 className="card-title">Особиста інформація</h2>
                        <div className="info-grid">
                            <div>
                                <span className="label">Дата народження</span>
                                <strong>{user.birthDate} ({user.age} років)</strong>
                            </div>
                            <div>
                                <span className="label">Група крові</span>
                                <strong>{user.bloodGroup}</strong>
                            </div>
                            <div>
                                <span className="label">Зріст / Вага</span>
                                <strong>{user.height} см / {user.weight} кг</strong>
                            </div>
                            <div>
                                <span className="label">Очі / Волосся</span>
                                <strong>{user.eyeColor} / {user.hair.color} ({user.hair.type})</strong>
                            </div>
                        </div>
                    </section>

                    <section className="info-card">
                        <h2 className="card-title">Професійна діяльність</h2>
                        <div className="info-grid">
                            <div>
                                <span className="label">Компанія</span>
                                <strong>{user.company.name}</strong>
                            </div>
                            <div>
                                <span className="label">Посада</span>
                                <strong>{user.company.title}</strong>
                            </div>
                            <div>
                                <span className="label">Місто</span>
                                <strong>{user.address.city}, {user.address.country}</strong>
                            </div>
                            <div>
                                <span className="label">Відділ</span>
                                <strong>{user.company.department}</strong>
                            </div>
                        </div>
                    </section>

                    <section className="info-card">
                        <h2 className="card-title">Фінансові дані</h2>
                        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                            <div className="bank-card">
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 'bold' }}>{user.bank.cardType}</span>
                                    <span>{user.bank.currency}</span>
                                </div>
                                <div style={{ fontSize: '1.2rem', letterSpacing: '2px' }}>{user.bank.cardNumber}</div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                                    <span>EXP: {user.bank.cardExpire}</span>
                                    <span>{user.firstName.toUpperCase()}</span>
                                </div>
                            </div>
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <span className="label">IBAN</span>
                                <code style={{ display: 'block', padding: '10px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.8rem', wordBreak: 'break-all', border: '1px dashed #cbd5e1' }}>
                                    {user.bank.iban}
                                </code>
                            </div>
                        </div>
                    </section>

                    <section className="info-card">
                        <h2 className="card-title">Технічні параметри</h2>
                        <table className="tech-data">
                            <tbody>
                            <tr>
                                <td><span className="label">IP Адреса</span></td>
                                <td>{user.ip}</td>
                            </tr>
                            <tr>
                                <td><span className="label">MAC Адреса</span></td>
                                <td>{user.macAddress}</td>
                            </tr>
                            <tr>
                                <td><span className="label">SSN / EIN</span></td>
                                <td>{user.ssn} / {user.ein}</td>
                            </tr>
                            <tr>
                                <td><span className="label">Crypto Wallet</span></td>
                                <td>{user.crypto.wallet} ({user.crypto.network})</td>
                            </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        </li>
    )
}
export default UserComponent