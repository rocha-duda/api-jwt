echo "=== TESTE DE REGISTRO ==="
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"name": "Usuario Teste", "email": "teste@email.com", "password": "Senha@123"}'
echo ""