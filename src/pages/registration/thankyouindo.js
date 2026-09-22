"use client";
import Link from "next/link";
import { useRouter } from "next/router";

function ThankYouIndo() {
  const router = useRouter();
  const { namaLengkap, projectTitle, category, namasekolah } = router.query;

  const displayNamaLengkap =
    (typeof namaLengkap === "string" && namaLengkap.trim()) || "Tidak ada data";
  const displayProjectTitle =
    (typeof projectTitle === "string" && projectTitle.trim()) || "Tidak ada data";
  const displayCategory =
    (typeof category === "string" && category.trim()) || "Tidak ada data";
  const displayNamaSekolah =
    (typeof namasekolah === "string" && namasekolah.trim()) || "Tidak ada data";

  return (
    <section className="thankyou">
      <div>
        <h1>Terima Kasih telah mendaftar!</h1>
        <p>Kami menghargai partisipasi Anda dan menantikan keterlibatan Anda.</p>

        <table className="thankyou-table">
          <tbody>
            <tr>
              <td><strong>Anggota Tim</strong></td>
              <td>{displayNamaLengkap}</td>
            </tr>
            <tr>
              <td><strong>Nama Sekolah</strong></td>
              <td>{displayNamaSekolah}</td>
            </tr>
            <tr>
              <td><strong>Judul Proyek</strong></td>
              <td>{displayProjectTitle}</td>
            </tr>
            <tr>
              <td><strong>Kategori Kompetisi</strong></td>
              <td>{displayCategory}</td>
            </tr>
          </tbody>
        </table>

        <p>
          <strong>*Jika data muncul, tangkap layar halaman ini sebagai bukti pendaftaran berhasil</strong>
        </p>
        <Link href="/" legacyBehavior>
          <a className="btn btn-action">
            Kembali ke menu pendaftaran
          </a>
        </Link>
      </div>
    </section>
  );
}

export default ThankYouIndo;
