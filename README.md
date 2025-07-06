|Nama|NIM|Kelas|Matkul|
|----|---|-----|------|
|Khairinisya Ani Atmaja|312310365|TI.23.A4|Pemograman Web 2|

&nbsp;  <br> &nbsp;
# Tugas 1
&nbsp;  <br> &nbsp;


1. Download Code Igniter terlebih dahulu <br>
  &nbsp;  <br> &nbsp;
2. Cek Code Igniter nya dulu dengan "php spark"
   ![image](https://github.com/user-attachments/assets/d59961bc-9e35-4f5f-8d6b-4d032d4964fb)
  <br> &nbsp;  <br> &nbsp;
3. Nyalakan Code Igniter nya dengan "php spark serve"
   <br> &nbsp; <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/e1107800-805a-402d-a216-63950a7a890d)

<br> &nbsp;<br> &nbsp;
   kita cek di localhost:8080
   ![image](https://github.com/user-attachments/assets/332d02bb-7211-45fa-9cd9-954cb5663ab8)

  Kalau sudah seperti itu berarti sudah work code igniter nya

<br> &nbsp; <br> &nbsp;
4. Sekarang di Vscode buka folder **app/Controller/Home.php**
   ![image](https://github.com/user-attachments/assets/4a3d2da8-2b20-4bee-9fd6-533c68216605)

   Hapus tanda **( ; )** di akhir kalimat welcome_message
<br> &nbsp; <br> &nbsp;

5. Sekarang tambahkan rute di **app/config/Routes.php**
   |$routes->get('/', 'Home::index');|
   |----|
   
   ![image](https://github.com/user-attachments/assets/80264df0-ef16-4573-b2c4-cde21b007e45)
<br> &nbsp; <br> &nbsp;

6. Tambahkan rute baru di **Routes.php** dengan
    |$routes->get('/about', 'Page::about');|
    |----|
    |$routes->get('/contact', 'Page::contact');|
    |$routes->get('/faqs', 'Page::faqs');|
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/c4d847cc-946d-4578-9fb6-6c49fb0b6ff5)
<br> &nbsp; <br> &nbsp;

7. Lalu di shell ketik **php spark routes** untuk mengetahui rute nya
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/002181ca-a160-47fa-ae04-055f60fbb3ad)
  <br> &nbsp;<br> &nbsp;

8. Ketik di localhost nya http://localhost:8080/about
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/831d0447-0db2-4574-883e-d22e4d913245)
   Kalau output nya **404 File Not Found** berarti itu tandanya sudah berhasill
    <br> &nbsp;<br> &nbsp;

9. Buat controller dengan nama **page.php**
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/71bf34c1-4c82-463b-890c-9b1f1cb347f0)
  <br> &nbsp;<br> &nbsp;

10. Lalu refresh page nya, kalau muncul seperti ini berarti sudah work
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/0566df05-d652-4685-928e-22d30fa0f43d)
   <br> &nbsp;<br> &nbsp;

11. Membuat View
     <br> &nbsp;
    Buat file baru di direktori **app/Views/about.php**
    ![image](https://github.com/user-attachments/assets/87a22ee3-b432-4480-86f7-f74665ca192b)
    <br> &nbsp;<br> &nbsp;
    
    <br> &nbsp;<br> &nbsp;
12. Ubah method **about** pada class **Controller Page**
    ![image](https://github.com/user-attachments/assets/34bf20fb-905b-4838-8f9e-34ffd46cbcd3)
    Gunanya untuk menambah elemen ( h1 ), ( hr ), dan elemen ( p ) di dalam web nya
    
    <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/d172eeda-515b-480f-978a-604df293a8c4)
    Hasil dari file **about.php** dan perubahan method about pada class **Controller Page**
     <br> &nbsp;<br> &nbsp;

13. Buat file **Style.css** di folder Public
     <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/61bfb0f1-244c-4cf3-a186-01ef93e7ae14)
     <br> &nbsp;
    Isi CSS nya dari praktikum yang dulu

14. Buat folder **template** di dalam folder **app/view**, di dalam folder **template** dan buat 2 file baru, **header** dan **footer**
     <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/6a168b17-dc3a-4000-944c-42fdf98fe8ff)
    <br> &nbsp;
    Template header.
    <br> &nbsp;<br> &nbsp;
    ![image](https://github.com/user-attachments/assets/55fa9401-9e32-42bb-b14c-c6bec3622eae)
    <br> &nbsp;
    Template Footer.
    <br> &nbsp;<br> &nbsp;

15. Kemudian ubah file **app/view/about.php** dengan menambahkan include header dan footer
    <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/aafea166-49fd-4440-b6a5-52196b607fee)
    <br> &nbsp;
    Setelah itu refresh page http://localhost:8080/about nya, kalau berhasil maka jadinya seperti ini
     <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/1264e4cd-4d26-4af8-81b8-edf4b41d5337)
    <br> &nbsp;<br> &nbsp;

**Tugas :**
<br> &nbsp;
Lengkapi kode program untuk menu lainnya yang ada pada Controller Page, sehingga semua
link pada navigasi header dapat menampilkan tampilan dengan layout yang sama.
<br> &nbsp;
Ini tampilan Kontak
<br> &nbsp;
![image](https://github.com/user-attachments/assets/bc2428b4-984e-4cb9-a577-e4bdabeffb6a)
<br> &nbsp;
Ini tampilan about
<br> &nbsp;
 ![image](https://github.com/user-attachments/assets/1264e4cd-4d26-4af8-81b8-edf4b41d5337)

 <br> &nbsp;<br> &nbsp;


<br>
<br>

 # Tugas 2


 1. Buat database bernama **lab_ci4** dan buat tabel bernama **artikel** di dalam nya, dan di dalam tabel artikel ada id, judul, isi, gambar, status, slug
     <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/8519881d-4b6c-426f-862c-674c5d37fad2)
  <br> &nbsp;<br> &nbsp;

2. Koneksikan database
   <br> &nbsp;
   Buka file yang bernama **.env** dan temukan tulisan **Database**
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/360d4d43-1a20-4d9b-bfce-abd5a4027b84)
   <br> &nbsp;
   di dalam tulisan **"database.default.database"** isi dengan nama database yang sebelumnya dibuat, lalu jika menggunakan password pada tulisan **"database.default.password"**
 bisa diisi
     <br> &nbsp;<br> &nbsp;

3. Buat file baru di dalam folder **app/Models** yang bernama **ArtikelModel.php**
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/b5305c27-d64a-4912-8cf8-0e5b12da44fd)
    <br> &nbsp;

4. Buat kontroller baru dengan nama **Artikel.php** pada folder **app/Controllers**
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/6c408e9d-2668-42fd-9732-6b01d84a1b5f)
   <br> &nbsp;

5. Buat folder dengan nama **artikel** pada direktori **app/views**, kemudian buat file baru bernama **index.php**
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/38e43477-bff0-499f-a0d3-cf94349a9481)
     <br> &nbsp;
   Lalu buka web http://localhost:8080/artikel, dan lihat apa sudah berubah apa belum, tampilannya akan seperti ini
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/0fa33fa2-28ca-42bf-9d15-2c070657d206)
     <br> &nbsp; <br> &nbsp;

6. Kemudian di MySQL insert beberapa kalimat ke dalam table **artikel** yang terhubung di database
    <br> &nbsp; <br> &nbsp;

7. Lalu refresh web **artikel** nya dan cek tampilan sudah muncul apa belum
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/212a90c7-5266-493a-9bb9-34009ab6e547)
    <br> &nbsp; <br> &nbsp;

8. Buat tampilan detail artikel dengan menambah fungsi baru pada **app/Controllers/artikel.php** dengan nama **View()**
     <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/278ad721-ad9e-4184-b5d2-97d143861cf5)
    <br> &nbsp; <br> &nbsp;
   
   Buat view baru untuk halaman detail artikelnya pada direktori **app/views/artikel** dengan nama **detail.php**
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/b17b3f87-279a-4896-b23d-74dc67fac8c0)
    <br> &nbsp;<br> &nbsp;

   Lalu buat rute untuk artikel detail
   <br> &nbsp;
    |$routes->get('/artikel/(:any)', 'Artikel::view/$1');|
    |----|
   <br> &nbsp; <br> &nbsp;
   
   
   Fungsi dari **View()** & **detail.php** ini ketika judul artikel di klik maka akan memunculkan artikel tersebut saja, ini contohnya :
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/1bc0c4ad-923f-4c0c-8c96-e7c008bae25e)
    <br> &nbsp;
   Ketika judul artikel pertama di klik akan muncul artikel tersebut

9. Buat panel Admin, menu admin digunakan untuk CRUD data artikel. Buat metode nya baru pada **app/Controllers/artikel.php** dengan **admin_index()**
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/302950f1-b826-4a33-8ed3-82c776de9464)
     <br> &nbsp;

   Lalu buat view tampilan adminnya di direktori **app/Views/artikel** dengan nama **admin_index.php**
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/73201db0-de47-41de-9830-ce3d2c03172d)
    <br> &nbsp; <br> &nbsp;

   Tambahkan route baru untuk menu admin di direktori **app/config/Routers.php**
    <br> &nbsp;
   
   ![image](https://github.com/user-attachments/assets/7d901a65-68f6-4dd6-a144-19d707bc53cb)
    <br> &nbsp; <br> &nbsp;

   Lalu akses menu admin dengan url http://localhost:8080/admin/artikel/
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/e83fa7df-37ab-404e-bfc9-28b0c3a6d9a9)
    <br> &nbsp;<br> &nbsp;

10. Menambah data artikel, menambah fungsi baru di direktori **app/Controllers/artikel.php** dengan nama **add()**
    <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/2631c580-dfd5-46af-8723-36b99d0b258c)
    <br> &nbsp;<br> &nbsp;

    Kemudian buat view baru untuk menambah artikel di direktori **app/Views/artikel** dengan nama **form_add.php**
    <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/c5efe6ce-df3d-477d-943a-efefd950eaa6)
     <br> &nbsp; <br> &nbsp;

11. Menmbuat fungsi untuk mengubah data artikel di direktori **app/Controllers/artikel.php** dengan nama **edit()**
    <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/4fddab49-8900-4bcf-ab99-b28906ca0429)
    <br> &nbsp;<br> &nbsp;

    Lalu buat view untuk tampilan edit nya di direktori **app/Views/artikel** dengan nama **form_edit.php**
    <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/f1a375ea-9f8d-4b52-9ddc-3252bdf3f088)
     <br> &nbsp; <br> &nbsp;

    Maka tampilannya seperti ini
     <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/4c5b52f9-bb9a-404c-87af-f299dde885bc)
    <br> &nbsp;
    Fungsi nya untuk mengedit artikel yang sudah dibuat sebelumnya
    <br> &nbsp; <br> &nbsp;

13. Membuat fungsi hapus/delete di direktori **app/Controllers/artikel.php** dengan nama **delete()**
     <br> &nbsp;
    ![image](https://github.com/user-attachments/assets/c30d8bf1-64c5-4478-a81b-97d594d70f53)
     <br> &nbsp;
    Fungsinya untuk menghapus artikel dari table 
       <br> &nbsp; <br> &nbsp;

<br>
<br>
<br>

# Tugas 3

1. Buat folder **layout** di dalam **app/Views** dan buat file dengan nama **main.php** di dalam folder **layout** dengan kode berikut
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/ecaa2255-75db-47c2-baad-54f86315b159)
   <br> &nbsp;<br> &nbsp;
   ![image](https://github.com/user-attachments/assets/e6c98fc6-f0d2-4cc9-bcac-337a688a3189)
   <br> &nbsp;<br> &nbsp;

2. Buat file pada direktori **app/Views** dengan nama **home.php**
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/36190b12-8e8a-49fd-8b46-402d78d2191c)
   <br> &nbsp;<br> &nbsp;

3. Buat class view, buat folder baru di **app/** dengan nama **Cells**, buat file **ArtikelTerkini.php** di dalam **app/Cells**
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/434af6ad-2641-4700-8f4a-6e8d5501b4d3)
    <br> &nbsp;<br> &nbsp;

4. Buat folder **components** di dalam **app/Views**, dan buat file **artikel_terkini.php** di dalam direktori **app/Views/components**
   <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/bc041cbe-565d-4240-8a47-c41742b9cc81)
    <br> &nbsp; <br> &nbsp;

5. Hasilnya akan seperti ini
    <br> &nbsp;
   ![image](https://github.com/user-attachments/assets/7029fe3b-e8b0-4458-974a-d4cbf1566d88)
    <br> &nbsp;<br> &nbsp;
    
<br>
<br>

# Tugas

1. Apa manfaat utama dari penggunaan View Layout dalam pengembangan aplikasi?
   <br> &nbsp;
2. Jelaskan perbedaan antara View Cell dan View biasa.
   <br> &nbsp;
3. Ubah View Cell agar hanya menampilkan post dengan kategori tertentu..

   
<br> &nbsp;<br> &nbsp;

<br>
<br>

# Jawaban 

  1. Dengan menggunakan View Layout, kode menjadi lebih modular, rapi, dan mudah dikelola, sehingga pengembangan aplikasi menjadi lebih cepat dan efisien.

  2. Gunakan view() untuk menampilkan halaman utama atau bagian besar dari aplikasi, Gunakan view_cell() jika ingin membuat komponen kecil yang bisa digunakan ulang di berbagai bagian aplikasi.

  
<br>
<br>
<br>

# Tugas 4

  1. Buat folder baru bernama layout dan di dalam folder layout buat file baru bernama main.php, folder layout berada di folder app/views
<br>
<br>

![image](https://github.com/user-attachments/assets/f91d0042-0549-4d31-943e-d5644d91880e)

<br>
<br>

2. Ubah file Home.php pada app/views menjadi seperti ini

<br>
<br>

![image](https://github.com/user-attachments/assets/a6a7fcc3-92de-45b7-8a00-5000cdfa22a4)

<br>
<br>

3. Buat folder Cells di dalam folder app/, lalu buat file ArtikelTerkini.php di dalam app/Cells

<br>
<br>

![image](https://github.com/user-attachments/assets/bb4b31a9-c15d-4c9f-83b0-a91861126178)

<br>
<br>

4. Buat folder Component di dalam folder app/views, lalu buat file artikel_terkini.php di dalam app/views/Component

<br>
<br>

![image](https://github.com/user-attachments/assets/538226ce-1af9-4f8b-8062-fb018b098d2b)

<br>
<br>

# Tugas 5

<br>
<br>

1. Buat table bernama user pada database yang berisi seperti ini
<br>
<br>

![image](https://github.com/user-attachments/assets/3a112669-2c50-473d-8e68-fec7bbe59074)

<br>
<br>

2. Lalu buat model user untuk proses data login. Buat file baru dengan nama UserModel.php pada direktori app/Models
<br>
<br>

![image](https://github.com/user-attachments/assets/44508214-0761-407f-91dc-e05e7a08d302)

<br>
<br>

3. Buat Controller baru dengan nama User.php pada direktori app/Controllers
<br>
<br>

![image](https://github.com/user-attachments/assets/2bbbc648-8be5-452d-ad9f-7fac207e8ffe)

<br>

Method index() disitu berfungsi untuk menampilkan daftar user, dan method login() untuk proses login

<br>
<br>

4. Buat folder baru dengan nama user pada direktori ap/views, lalu buat file  baru dengan nama login.php
<br>
<br>

 ![image](https://github.com/user-attachments/assets/6fd80bc9-93fc-44da-9656-9e5da8aa0bc1)

<br>
<br>

5. Buat database seeder, ketik ini di terminal xampp
<br>
<br>

![image](https://github.com/user-attachments/assets/358c478e-2925-4dce-8b93-43402c7d1506)

<br>
<br>

6. Buka file UserSeeder.php pada direktori app/Database/Seeds/
<br>
<br>

![image](https://github.com/user-attachments/assets/775a9310-4192-435d-864d-f8ce9ca9acee)

<br>
<br>

7. Buka terminal lagi dan ketika ini
<br>
<br>

![image](https://github.com/user-attachments/assets/cb0e4588-a473-4810-acdb-28bb09d2adc8)

<br>
<br>

8. Cek pada localhost:8080/user/login
<br>
<br>

![image](https://github.com/user-attachments/assets/209e0089-3e35-4b90-9ae7-b01023e92500)

<br>
Apa hasilnya sudah seperti ini apa belum

9. Buat file baru dengan nama Auth.php pada direktori app/Filters
<br>
<br>

![image](https://github.com/user-attachments/assets/6602bf87-8ec3-4896-96be-783631150311)

<br>
<br>

10. Buka file Filters.php pada direktori app/config dan tambahkan kode ini
<br>
<br>

![image](https://github.com/user-attachments/assets/3123b0cd-96ae-4e5e-8b5c-768bbcb27c0a)

<br>
<br>

11. Buka file Routes.php pada direktori app/config dan sesuaikan kodenya

<br>
<br>

![image](https://github.com/user-attachments/assets/74626172-93d3-46e6-822a-c63bbec2870f)

<br>
<br>

12. Lalu buka localhost:8080/admin/artikel
<br>
<br>

![image](https://github.com/user-attachments/assets/209e0089-3e35-4b90-9ae7-b01023e92500)

<br>
 Tampilannya udah seperti itu apa belum

<br>
<br>

13. Tambahkan fungsi logout pada Controller User
<br>
<br>

![image](https://github.com/user-attachments/assets/7e8173ad-a612-467f-b6d2-9c1177ddc1ce)

<br>
<br>

# Tugas 6
<br>
<br>

1. Buat pagination dengan cara buka Controller Artikel pada direktori app/Controllers/artikel.php lalu modifikasi kode nya

<br>
<br>

![image](https://github.com/user-attachments/assets/15201792-a871-4b9f-ac3e-cea76c2a0c4b)

<br>
<br>

2. Buka file admin_index.php pada direktori app/Views/artikel dan tambahkan kode ini 

``` <?= $pager->links(); ?> ```

<br>
<br>

![image](https://github.com/user-attachments/assets/b1295ed9-fecb-47b2-9101-649dc2811e5e)

<br>
<br>

3. Buat pencarian dengan cara buka Controller Artikel pada direktori app/Controllers/artikel.php lalu modifikasi kode nya

<br>
<br>

![image](https://github.com/user-attachments/assets/15201792-a871-4b9f-ac3e-cea76c2a0c4b)

<br>
<br>

4. Buka file admin_index.php pada direktori app/Views/artikel dan tambahkan kode ini 

``` <?= $pager->only(['q'])->links(); ?>
 ```

<br>
<br>

![image](https://github.com/user-attachments/assets/b1295ed9-fecb-47b2-9101-649dc2811e5e)

<br>
<br>


# Tugas 7

<br>
<br>

1. Pada controller artikel, tambah methode yang bernama add
   <br>
   <br>
   ![image](https://github.com/user-attachments/assets/37e0aae7-844b-474c-8331-d556b018b7f5)

<br>
<br>

2. Pada file form_add.php di app/views/artikel tambahkan input seperti ini
   <br>
   <br>
   
   ![image](https://github.com/user-attachments/assets/eeb4e524-c297-47e9-9288-8c5dccce9d26)

   <br>
   <br>

3. Tambahkan form aksi seperti ini di file form_add.php nya
  <br>
  <br>
  
   ![image](https://github.com/user-attachments/assets/7496cbf2-1831-45d2-89c7-02133429dfa0)

  <br>
  <br>

4. Tes di halaman tambah artikel
  <br>
  <br>
  
   ![image](https://github.com/user-attachments/assets/4f236747-90a3-4868-8348-f3ee42339fcc)

  <br>
  <br>

# Tugas 8

<br>
<br>

1. Buat tabel bernama "Kategori"
   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/30a18072-cfe5-4fa8-ac3d-3ffdcee17520)

  <br>
  <br>

2. Ubah tabel artikel di database
   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/810f97b6-5a8e-4dbd-b026-928c6b0da120)

  <br>
  <br>

3. Buat model baru bernama KategoriModel.php

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/7650c755-b9aa-46d4-8867-6da1bf3ad3d6)

   <br>
   <br>

4. Ubah ArtikelModel.php  untuk mendefinisikan relasi dengan KategoriModel.php

  <br>
  <br>

  ![image](https://github.com/user-attachments/assets/e27366ba-9d99-4bec-8946-782cd96e22aa)

  <br>
  <br>

5. Ubah Artikel.php di app/controller/Artikel.php

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/8ef9612d-0bad-4fb1-8382-bd6981130a32)

    <br>
    <br>

    ![image](https://github.com/user-attachments/assets/dd362473-b56a-45d9-8016-16ea6e588b3d)

    <br>
    <br>

    ![image](https://github.com/user-attachments/assets/7b5e1cb4-a3ee-4a71-8963-02602156b668)

    <br>
    <br>

    ![image](https://github.com/user-attachments/assets/b76d7dea-fdff-48fc-8706-ef8961a1760f)

    <br>
    <br>

    ![Screenshot 2025-07-03 202345](https://github.com/user-attachments/assets/2e291c30-acad-4ffb-a1d7-c0d38ddbc082)

    <br>
    <br>

    ![Screenshot 2025-07-03 202406](https://github.com/user-attachments/assets/5b45bfa0-7843-4336-b6e1-c7aa46387331)

    <br>
    <br>

6. Ubah index.php pada view/artikel

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/ff4ce174-e446-430e-b7fb-d3036e01bb7f)

  <br>
  <br>

7. Ubah admin_index.php pada view/artikel juga

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/ee99838e-6289-4509-b3c2-2bc44f12e444)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/e6dd20a0-20c9-4d36-ac73-8e219325eff7)

  <br>
  <br>

  ![image](https://github.com/user-attachments/assets/31191644-b420-4735-b496-65ea85e5f475)

  <br>
  <br>

8. ubah form_Add.php pada view/artikel juga

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/6783463e-46e7-4888-abae-6cec4ce49224)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/8a5f6eff-373d-4a14-9b3f-e75f9cda14eb)

   <br>
   <br>

9. Ubah form_Edit.php juga di view/artikel

    <br>
    <br>

    ![image](https://github.com/user-attachments/assets/787f74a7-06d5-424d-bb52-b1d209cb6848)

    <br>
    <br>

    ![image](https://github.com/user-attachments/assets/6007cdba-0fb1-49a7-910b-aa695544d7a5)


    <br>
    <br>

# Tugas 9

  <br>
  <br>

  1. Salin file query **jquery-3.6.0.min.js** ke dalam folder public/assets/js

     <br>
     <br>

     ![image](https://github.com/user-attachments/assets/beaf0a8f-f2d7-4aea-b298-3b8bfe36ef6f)

     <br>
     <br>


  2. Buat AJAX controller

     <br>
     <br>

     ![image](https://github.com/user-attachments/assets/d51493a4-82ff-46af-95db-d169eacc793c)

     <br>
     <br>

     ![image](https://github.com/user-attachments/assets/eb7ad226-bbb5-4753-88b6-0d44150e1ae1)

     <br>
     <br>

3. Buat view untuk AJAX di app/views/ajax

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/2a3de9e3-6ba9-47eb-b2b6-c77e449b40b8)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/ee5831eb-f460-42f2-a60d-f31dea62e0de)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/b6c1aa2e-640d-4546-81ea-8bbb7d9d7757)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/8d00ae5e-28a6-4ec7-ade7-e9b08839adc0)

   <br>
   <br>

# Tugas 10

  <br>
  <br>

1. Ubah method pada admin_index() di file Artikel.php

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/8873edab-810e-4b61-8e7c-0acf8eb6098b)

   <br>
   <br>

2. Ubah view pada admin_index.php

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/5607ef32-5c19-4404-a605-009fad9eca24)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/5e54397e-1c6e-4a7d-b53b-7e3735fd56d3)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/7c3cbde2-f761-4575-88ec-6f18b4a65b29)

   <br>
   <br>

3. Tampilan pada AJAX nya

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/167e519d-a724-44c2-809d-5fdd158a66b6)

   <br>
   <br>

# Tugas 11

  <br>
  <br>

1. Buat controller untuk Postman yang bernama Post.php

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/fe1e296a-20e7-43c6-a735-9573014ae1fe)

   <br>
   <br>

2. Buat routes untuk API nya

   <br>
   <br>

  ``` $routes->resource('post'); ```

  <br>
  <br>

3. Cek routes nya di shell menggunakan ``` php spark routes  ```

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/dcc70f1e-cab2-4f4b-8164-5ce7315f4557)

   <br>
   <br>

4. Buka aplikasi Postman dan pilih create new -> Http Request

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/f33139c7-1cc9-4e63-83f6-4d04ae87f066)

   <br>
   <br>

5. Untuk menampilkan semua data klik methode GET dan masukkan URL http://localhost:8080/post

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/7e97f96f-ad6f-4c36-b890-0fdfe30fda1a)

   <br>
   <br>

6. Untuk menampikan data spesifik bisa menggunakan methode GET dan menambahkan id dibelakang URL nya, contoh http://localhost:8080/post/9

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/b2e40452-3faa-4557-845d-7fa0283cc534)

   <br>
   <br>

7. Untuk menambahkan data bisa menggunakan methode POST

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/762b4ecd-c20e-4b48-971f-4215ed293559)

   <br>
   <br>

   pilih **Body** dan lalu pilih **x-www-form-uriencoded** dan masukan atribut tabel pada kolom **KEY** dan nilai data baru di kolom **VALUE** dan jangan lupa klik send

   <br>
   <br>

![image](https://github.com/user-attachments/assets/effb8cb6-b3fb-41e2-86b0-bda0ad99d9ea)


   <br>
   <br>

8. Untuk menghapus data bisa menggunakan methode delete. Lalu masukkan URL spesifik dan data yang mana yang ingin dihapus, contoh http://localhost:8080/post/11

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/dd9072d8-c9c7-4b07-86e1-56f308c8f389)

   <br>
   <br>

# Tugas 12

  <br>
  <br>

1. VueJs, buat struktur nya seperti ini

   📂 project-root  
├── index.html  
└── assets  
    ├── css  
    │   └── style.css  
    └── js  
        └── app.js  

  <br>
  <br>

2. Buat index.html nya seperti ini

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/b04f94ec-ffe5-49f5-8ae2-dd2873820bd2)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/cb6d9ebc-877b-44a5-8735-514fa177fe21)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/3d421ffd-e7f2-4295-982d-4283c41dfb31)

   <br>
   <br>

3. Buat file app.js

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/a2950c2e-9ddc-49b4-b569-e0fd7a3b4483)

   <br>
   <br>

   Sesuaikan API nya masing2

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/f0e7c43e-8f06-4d91-8265-2e4e6e13932f)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/5a2f96d0-2817-42d5-8a83-59087dd40269)

   <br>
   <br>

   Contoh tampilannya

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/673cd606-b0b6-4d70-8d12-b668b31c41f1)

   <br>
   <br>

4. Buat CSS nya

   <br>
   <br>

   ![Screenshot 2025-07-04 125747](https://github.com/user-attachments/assets/aae0019f-adfe-4791-a7b9-6fb2e74d87aa)

   <br>
   <br>

   ![Screenshot 2025-07-04 125756](https://github.com/user-attachments/assets/fd1b62e8-2848-4a51-bef9-210c7ee8f6c9)

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/471cee15-02f9-4e20-81db-5883de040748)

   <br>
   <br>

   Tampilan untuk menambahkan data :

   <br>
   <br>

   ![image](https://github.com/user-attachments/assets/fb26d93e-a799-495a-8f0b-fac3475afb26)

   
