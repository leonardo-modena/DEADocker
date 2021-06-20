exports.query = {
    findAll: 'SELECT * FROM devices',
    findBySecretKey: `SELECT * FROM devices WHERE devices.secretKey = ?`,
    findById: `SELECT * FROM devices WHERE devices.id = ?`,
    findRecordsById: `SELECT * FROM records r WHERE r.fkDevice = ?`,
    findUserById: `SELECT * FROM users u`,
    lastRecordById: `SELECT lastrecord.id, r.pm10, r.pm25, r.recordingtime, g.latitude, g.longitude FROM 
    (SELECT fkDevice, MAX(id) AS id FROM records GROUP BY fkDevice) lastrecord, records r, devices d, geolocation g WHERE lastrecord.id = r.id 
    AND lastrecord.fkDevice = d.id AND d.id = ?`,
    Records24hourById: `SELECT * FROM records r WHERE r.fkDevice = ? and r.recordingtime >= (now() - interval 1 day);`,
    lastRecordLocation: `SELECT  lastrecord.id, r.pm1, r.pm10, r.pm25, r.recordingtime, g.latitude, g.longitude FROM 
    (SELECT fkDevice, MAX(id) AS id FROM records GROUP BY fkDevice) lastrecord, records r, devices d, geolocation g WHERE lastrecord.id = r.id 
    AND lastrecord.fkDevice = d.id AND d.fkGeolocation = g.id`,
    recordIntervalBySecretKey: `SELECT intervalTime from devices d, recordsinterval r where d.fkRecordsInterval = r.id AND d.secretKey = ?`,
    createRecord: `INSERT INTO records SET ?`,
    updateSecretKey: `UPDATE devices SET secretKey = ? WHERE id = ?;`,
    updateUser: `UPDATE users SET name = ?, surname = ? WHERE id = ?;`,

}