
CREATE DATABASE transactions_app;
USE transactions_app;

CREATE TABLE transactions (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  contents TEXT NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO transactions (title, contents)
VALUES 
('Transfer to personal account', '+5000'),
('Creadit card payment', '-10000');
