
CREATE TABLE Employe
(matricule NUMBER(5) CONSTRAINT pk_emp PRIMARY KEY,
 nom VARCHAR(30) CONSTRAINT nn_emp_nom NOT NULL,
 prenom VARCHAR(30) CONSTRAINT nn_emp_prenom NOT NULL,
 salaire NUMBER(6) CONSTRAINT ck_emp_salaire
		CHECK (salaire >=35000),
 couriel VARCHAR(50) CONSTANT uq_emp_couriel UNIQUE,
 id_dept NUMBER(3) CONSTRAINT fk_dept REFERENCES Departement(id_dept)
 );