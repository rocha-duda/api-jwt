echo "=== TESTE: Registrar com REQUISIÇÃO MAL FORMATADA (faltando campo 'name') ==="
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{"email": "teste@email.com", "password": "Senha@123"}'
echo ""