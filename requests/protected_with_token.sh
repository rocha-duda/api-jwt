#!/bin/bash
echo "=== TESTE DE ROTA PROTEGIDA (COM TOKEN) ==="
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTI4ZGZmN2UzZDY5NjllODNiNWE2MSIsImlhdCI6MTc0NjA1ODAzNCwiZXhwIjoxNzQ2MDYxNjM0fQ.U3tALLQehkNqmi0tBLWbfIh5nd1V_qEYGzWL8jimDD4"  # Token entre aspas
curl -X GET http://localhost:3000/api/protected \
  -H "Authorization: Bearer $TOKEN"
echo ""