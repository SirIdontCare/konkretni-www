# Legal Required — Lista brakujących danych formalno-prawnych

Do pełnego uruchomienia produkcyjnego (Production Launch) na domenie `konkretni.com.pl` wymagane jest uzupełnienie i zatwierdzenie poniższych danych prawnych przez właścicieli serwisu:

---

## 1. Dane rejestrowe podmiotu / Administratora (RODO)
- [ ] Pełna nazwa podmiotu gospodarczego / firmy prowadzącej działalność (lub wskazanie osób fizycznych prowadzących JDG w ramach agencji)
- [ ] Forma prawna działalności
- [ ] Numer NIP
- [ ] Numer REGON
- [ ] Numer KRS (jeśli dotyczy)
- [ ] Adres siedziby / adres do korespondencji
- [ ] Wskazanie właściwego organu rejestrowego / statusu agenta ubezpieczeniowego w rejestrze KNF (RAU)

## 2. Polityka prywatności i ochrona danych (RODO)
- [ ] Oficjalna nazwa Administratora Danych Osobowych wstawiona do sekcji 1 polityki prywatności
- [ ] Potwierdzenie adresu e-mail do kontaktu w sprawach RODO (obecnie: `biuro@konkretni.com.pl`)
- [ ] Wyznaczenie / brak wyznaczenia Inspektora Ochrony Danych (IOD)
- [ ] Potwierdzenie okresów retencji danych dla zapytań z formularza
- [ ] Lista podmiotów przetwarzających (procesorów): hosting (Vercel), dostawca poczty / CRM

## 3. Regulamin świadczenia usług drogą elektroniczną (jeśli wymagany)
- [ ] Potwierdzenie, czy wymagany jest osobny dokument regulaminu dla bezpłatnych konsultacji ubezpieczeniowych

---

*Uwaga: W kodzie serwisu pola prawne są przygotowane w `siteConfig.footer.legal` (`entity`, `nip`, `regon`, `krs`) i automatycznie pojawią się w stopce po wpisaniu wartości w konfiguracji.*
