ALTER SESSION SET Container=xepdb1;
ALTER USER HR identified by hr account unlock;
CREATE USER stage IDENTIFIED BY stage;
ALTER USER stage QUOTA UNLIMITED ON Users;
GRANT connect , resource, CREATE VIEW TO stage;
