CREATE TABLE "lawyers" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone" varchar(11) NOT NULL UNIQUE,
	"cpf" varchar(11) NOT NULL UNIQUE,
	"description" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "lawyers_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "companys" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"subscription_id" integer NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"cnpj" varchar(14) NOT NULL UNIQUE,
	CONSTRAINT "companys_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "subscriptions" (
	"id" serial NOT NULL,
	"name" varchar(20) NOT NULL,
	"max_employees" integer NOT NULL,
	CONSTRAINT "subscriptions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "company_employee" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	"company_id" integer NOT NULL,
	CONSTRAINT "company_employee_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "ratings" (
	"id" serial NOT NULL,
	"lawyer_id" integer NOT NULL,
	"employee_id" integer NOT NULL,
	"stars" varchar(1) NOT NULL,
	"description" varchar(255),
	CONSTRAINT "ratings_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "companys" ADD CONSTRAINT "companys_fk0" FOREIGN KEY ("subscription_id") REFERENCES "subscriptions"("id");

ALTER TABLE "company_employee" ADD CONSTRAINT "company_employee_fk0" FOREIGN KEY ("company_id") REFERENCES "companys"("id");

ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk0" FOREIGN KEY ("lawyer_id") REFERENCES "lawyers"("id");
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_fk1" FOREIGN KEY ("employee_id") REFERENCES "company_employee"("id");
