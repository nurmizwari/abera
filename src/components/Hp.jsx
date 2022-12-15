import React from "react";

export default function Hp() {
  return (
    <div className="container hp mb-4 mt-5">
      <div className="row ">
        <div
          className="col "
          //   style={{ height: "403", width: "255px", padding: "90px" }}
        >
          <div
            class="card shadow mt-2 "
            style={{ height: "400px", width: "auto" }}
          >
            <img
              src="https://backend-service.abera.id/apis/images/services/1658921272168573901.png"
              class="card-img-top mt-5"
              alt="..."
              style={{ height: "100px", objectFit: "contain" }}
            />
            <div class="card-body mb-5">
              <h5 class="card-title text-center">IOS APPS</h5>
              <p className="text-center">
                Memaksimalkan pelayanan bisnis dan kinerja secara digital dengan
                memiliki aplikasi berbasis IOS
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
            class="card shadow mt-2 "
            style={{ height: "400px", width: "auto" }}
          >
            <img
              src="https://backend-service.abera.id/apis/images/services/1658921303994157595.png"
              class="card-img-top mt-5"
              alt="..."
              style={{ height: "100px", objectFit: "contain" }}
            />
            <div class="card-body mb-5">
              <h5 class="card-title">Geographic Information System</h5>
              <p className="text-center">
                Membuat sistem serta menganalisis peta berbasis online untuk
                meningkatkan kinerja pegawai/karyawan &amp; menyiapkan kebutuhan
                informasi
              </p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div
            class="card shadow mt-2 "
            style={{ height: "400px", width: "auto" }}
          >
            <img
              src="https://backend-service.abera.id/apis/images/services/1658921321319601160.png"
              class="card-img-top mt-5"
              alt="..."
              style={{ height: "100px", objectFit: "contain" }}
            />
            <div class="card-body mb-5">
              <h5 class="card-title">MOBILE APPS</h5>
              <p className="text-center">
                Memaksimalkan pelayanan bisnis dan kinerja secara digital dengan
                memiliki aplikasi berbasis Mobile
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            class="card shadow mt-2 "
            style={{ height: "400px", width: "auto" }}
          >
            <img
              src="https://backend-service.abera.id/apis/images/services/1658921340037003917.png"
              class="card-img-top mt-5"
              alt="..."
              style={{ height: "100px", objectFit: "contain" }}
            />
            <div class="card-body mb-5">
              <h5 class="card-title">APLIKASI E-GOVERNMENT</h5>
              <p className="text-center">
                Memberikan solusi untuk kebutuhan software guna mengoptimalisasi
                kinerja di sektor pemerintahan
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-end mt-2">
          <a href="">Lihat lebih banyak </a>
        </div>
      </div>
    </div>
  );
}
