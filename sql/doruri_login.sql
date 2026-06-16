use doruri;

create table if not exists doruri_users
(
    id varchar(100) primary key comment '사용자 로그인 아이디',
    name varchar(100) not null comment '사용자 이름',
    age smallint unsigned not null comment '사용자 나이, 최대 65,000살',
    password varchar(300) not null comment '로그인 암호, 패스워드'
)engine = InnoDB default charset = utf8;

/*
https://youtu.be/IYgU9yfPpHs?si=yLUTis-ckoDuhBdZ

MySQL에서 ENGINE = InnoDB DEFAULT CHARSET = utf8은 테이블을 생성할 때 사용하는 스토리지 엔진과 데이터 저장 방식(문자셋)을 명시하는 구문입니다.각각의 의미는 다음과 같습니다.1. ENGINE = InnoDB데이터베이스의 스토리지 엔진을 InnoDB로 지정한다는 의미입니다.트랜잭션 지원(ACID): 데이터의 무결성을 보장하며, 오류 발생 시 이전 상태로 되돌리는 롤백(Rollback) 기능을 제공합니다.행 단위 잠금(Row-level locking): 여러 사용자가 동시에 데이터를 수정할 때 충돌을 최소화하여 성능이 뛰어납니다.외래 키(Foreign Key) 지원: 테이블 간의 관계를 설정할 수 있습니다.2. DEFAULT CHARSET = utf8데이터나 테이블을 저장할 때 사용하는 문자셋(Character Set)을 utf8로 지정한다는 의미입니다.다국어 지원: 한글, 영어, 한자 등 전 세계의 다양한 문자를 데이터베이스에 저장할 수 있도록 해줍니다.주의사항 (최신 버전 기준): MySQL에서 utf8은 글자당 최대 3바이트만 지원하는 방식(utf8mb3)입니다. 이 방식으로는 4바이트 크기인 모바일 이모티콘이나 특수 기호 등을 저장할 수 없습니다.이모티콘 등 다양한 특수 문자를 제대로 처리하려면 utf8 대신 utf8mb4 문자셋을 사용하는 것이 권장됩니다.
*/
