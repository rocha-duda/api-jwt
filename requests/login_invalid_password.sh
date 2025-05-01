echo "=== TESTE: Login com SENHA INCORRETA ==="
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email": "existente@email.com", "password": "SenhaERRADA"}'
echo ""