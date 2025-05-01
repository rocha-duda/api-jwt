echo "=== TESTE DE LOGIN ==="
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "teste@email.com", "password": "Senha@123"}'
echo ""