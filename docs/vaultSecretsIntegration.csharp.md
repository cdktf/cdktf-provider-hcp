# `vaultSecretsIntegration` Submodule <a name="`vaultSecretsIntegration` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegration <a name="VaultSecretsIntegration" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration hcp_vault_secrets_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegration(Construct Scope, string Id, VaultSecretsIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig">VaultSecretsIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig">VaultSecretsIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys">PutAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity">PutAwsFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret">PutAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity">PutAzureFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials">PutConfluentStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity">PutGcpFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey">PutGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials">PutMongodbAtlasStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials">PutTwilioStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsAccessKeys">ResetAwsAccessKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsFederatedWorkloadIdentity">ResetAwsFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureClientSecret">ResetAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureFederatedWorkloadIdentity">ResetAzureFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetConfluentStaticCredentials">ResetConfluentStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpFederatedWorkloadIdentity">ResetGcpFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpServiceAccountKey">ResetGcpServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetMongodbAtlasStaticCredentials">ResetMongodbAtlasStaticCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetTwilioStaticCredentials">ResetTwilioStaticCredentials</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAwsAccessKeys` <a name="PutAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys"></a>

```csharp
private void PutAwsAccessKeys(VaultSecretsIntegrationAwsAccessKeys Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsAccessKeys.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

---

##### `PutAwsFederatedWorkloadIdentity` <a name="PutAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity"></a>

```csharp
private void PutAwsFederatedWorkloadIdentity(VaultSecretsIntegrationAwsFederatedWorkloadIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAwsFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

---

##### `PutAzureClientSecret` <a name="PutAzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret"></a>

```csharp
private void PutAzureClientSecret(VaultSecretsIntegrationAzureClientSecret Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureClientSecret.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

---

##### `PutAzureFederatedWorkloadIdentity` <a name="PutAzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity"></a>

```csharp
private void PutAzureFederatedWorkloadIdentity(VaultSecretsIntegrationAzureFederatedWorkloadIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putAzureFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

---

##### `PutConfluentStaticCredentials` <a name="PutConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials"></a>

```csharp
private void PutConfluentStaticCredentials(VaultSecretsIntegrationConfluentStaticCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putConfluentStaticCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

---

##### `PutGcpFederatedWorkloadIdentity` <a name="PutGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity"></a>

```csharp
private void PutGcpFederatedWorkloadIdentity(VaultSecretsIntegrationGcpFederatedWorkloadIdentity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

---

##### `PutGcpServiceAccountKey` <a name="PutGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey"></a>

```csharp
private void PutGcpServiceAccountKey(VaultSecretsIntegrationGcpServiceAccountKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putGcpServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

---

##### `PutMongodbAtlasStaticCredentials` <a name="PutMongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials"></a>

```csharp
private void PutMongodbAtlasStaticCredentials(VaultSecretsIntegrationMongodbAtlasStaticCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putMongodbAtlasStaticCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

---

##### `PutTwilioStaticCredentials` <a name="PutTwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials"></a>

```csharp
private void PutTwilioStaticCredentials(VaultSecretsIntegrationTwilioStaticCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.putTwilioStaticCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

---

##### `ResetAwsAccessKeys` <a name="ResetAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsAccessKeys"></a>

```csharp
private void ResetAwsAccessKeys()
```

##### `ResetAwsFederatedWorkloadIdentity` <a name="ResetAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAwsFederatedWorkloadIdentity"></a>

```csharp
private void ResetAwsFederatedWorkloadIdentity()
```

##### `ResetAzureClientSecret` <a name="ResetAzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureClientSecret"></a>

```csharp
private void ResetAzureClientSecret()
```

##### `ResetAzureFederatedWorkloadIdentity` <a name="ResetAzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetAzureFederatedWorkloadIdentity"></a>

```csharp
private void ResetAzureFederatedWorkloadIdentity()
```

##### `ResetConfluentStaticCredentials` <a name="ResetConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetConfluentStaticCredentials"></a>

```csharp
private void ResetConfluentStaticCredentials()
```

##### `ResetGcpFederatedWorkloadIdentity` <a name="ResetGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpFederatedWorkloadIdentity"></a>

```csharp
private void ResetGcpFederatedWorkloadIdentity()
```

##### `ResetGcpServiceAccountKey` <a name="ResetGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetGcpServiceAccountKey"></a>

```csharp
private void ResetGcpServiceAccountKey()
```

##### `ResetMongodbAtlasStaticCredentials` <a name="ResetMongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetMongodbAtlasStaticCredentials"></a>

```csharp
private void ResetMongodbAtlasStaticCredentials()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetTwilioStaticCredentials` <a name="ResetTwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.resetTwilioStaticCredentials"></a>

```csharp
private void ResetTwilioStaticCredentials()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsIntegration.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

VaultSecretsIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a VaultSecretsIntegration resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeys">AwsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentity">AwsFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecret">AzureClientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference">VaultSecretsIntegrationAzureClientSecretOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentity">AzureFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentials">ConfluentStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentity">GcpFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentials">MongodbAtlasStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference">VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.organizationId">OrganizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentials">TwilioStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeysInput">AwsAccessKeysInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentityInput">AwsFederatedWorkloadIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecretInput">AzureClientSecretInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentityInput">AzureFederatedWorkloadIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentialsInput">ConfluentStaticCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentityInput">GcpFederatedWorkloadIdentityInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKeyInput">GcpServiceAccountKeyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentialsInput">MongodbAtlasStaticCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerTypeInput">ProviderTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentialsInput">TwilioStaticCredentialsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilities">Capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AwsAccessKeys`<sup>Required</sup> <a name="AwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeys"></a>

```csharp
public VaultSecretsIntegrationAwsAccessKeysOutputReference AwsAccessKeys { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference">VaultSecretsIntegrationAwsAccessKeysOutputReference</a>

---

##### `AwsFederatedWorkloadIdentity`<sup>Required</sup> <a name="AwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentity"></a>

```csharp
public VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference AwsFederatedWorkloadIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference</a>

---

##### `AzureClientSecret`<sup>Required</sup> <a name="AzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecret"></a>

```csharp
public VaultSecretsIntegrationAzureClientSecretOutputReference AzureClientSecret { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference">VaultSecretsIntegrationAzureClientSecretOutputReference</a>

---

##### `AzureFederatedWorkloadIdentity`<sup>Required</sup> <a name="AzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentity"></a>

```csharp
public VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference AzureFederatedWorkloadIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference</a>

---

##### `ConfluentStaticCredentials`<sup>Required</sup> <a name="ConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentials"></a>

```csharp
public VaultSecretsIntegrationConfluentStaticCredentialsOutputReference ConfluentStaticCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference">VaultSecretsIntegrationConfluentStaticCredentialsOutputReference</a>

---

##### `GcpFederatedWorkloadIdentity`<sup>Required</sup> <a name="GcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentity"></a>

```csharp
public VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference GcpFederatedWorkloadIdentity { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference</a>

---

##### `GcpServiceAccountKey`<sup>Required</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKey"></a>

```csharp
public VaultSecretsIntegrationGcpServiceAccountKeyOutputReference GcpServiceAccountKey { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyOutputReference</a>

---

##### `MongodbAtlasStaticCredentials`<sup>Required</sup> <a name="MongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentials"></a>

```csharp
public VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference MongodbAtlasStaticCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference">VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference</a>

---

##### `OrganizationId`<sup>Required</sup> <a name="OrganizationId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.organizationId"></a>

```csharp
public string OrganizationId { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `TwilioStaticCredentials`<sup>Required</sup> <a name="TwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentials"></a>

```csharp
public VaultSecretsIntegrationTwilioStaticCredentialsOutputReference TwilioStaticCredentials { get; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference">VaultSecretsIntegrationTwilioStaticCredentialsOutputReference</a>

---

##### `AwsAccessKeysInput`<sup>Optional</sup> <a name="AwsAccessKeysInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsAccessKeysInput"></a>

```csharp
public object AwsAccessKeysInput { get; }
```

- *Type:* object

---

##### `AwsFederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="AwsFederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.awsFederatedWorkloadIdentityInput"></a>

```csharp
public object AwsFederatedWorkloadIdentityInput { get; }
```

- *Type:* object

---

##### `AzureClientSecretInput`<sup>Optional</sup> <a name="AzureClientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureClientSecretInput"></a>

```csharp
public object AzureClientSecretInput { get; }
```

- *Type:* object

---

##### `AzureFederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="AzureFederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.azureFederatedWorkloadIdentityInput"></a>

```csharp
public object AzureFederatedWorkloadIdentityInput { get; }
```

- *Type:* object

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilitiesInput"></a>

```csharp
public string[] CapabilitiesInput { get; }
```

- *Type:* string[]

---

##### `ConfluentStaticCredentialsInput`<sup>Optional</sup> <a name="ConfluentStaticCredentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.confluentStaticCredentialsInput"></a>

```csharp
public object ConfluentStaticCredentialsInput { get; }
```

- *Type:* object

---

##### `GcpFederatedWorkloadIdentityInput`<sup>Optional</sup> <a name="GcpFederatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpFederatedWorkloadIdentityInput"></a>

```csharp
public object GcpFederatedWorkloadIdentityInput { get; }
```

- *Type:* object

---

##### `GcpServiceAccountKeyInput`<sup>Optional</sup> <a name="GcpServiceAccountKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.gcpServiceAccountKeyInput"></a>

```csharp
public object GcpServiceAccountKeyInput { get; }
```

- *Type:* object

---

##### `MongodbAtlasStaticCredentialsInput`<sup>Optional</sup> <a name="MongodbAtlasStaticCredentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.mongodbAtlasStaticCredentialsInput"></a>

```csharp
public object MongodbAtlasStaticCredentialsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `ProviderTypeInput`<sup>Optional</sup> <a name="ProviderTypeInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerTypeInput"></a>

```csharp
public string ProviderTypeInput { get; }
```

- *Type:* string

---

##### `TwilioStaticCredentialsInput`<sup>Optional</sup> <a name="TwilioStaticCredentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.twilioStaticCredentialsInput"></a>

```csharp
public object TwilioStaticCredentialsInput { get; }
```

- *Type:* object

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.capabilities"></a>

```csharp
public string[] Capabilities { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationAwsAccessKeys <a name="VaultSecretsIntegrationAwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAwsAccessKeys {
    string AccessKeyId,
    string SecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Key ID used with the secret key to authenticate against the target AWS account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Secret key used with the key ID to authenticate against the target AWS account. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Key ID used with the secret key to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#access_key_id VaultSecretsIntegration#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Secret key used with the key ID to authenticate against the target AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#secret_access_key VaultSecretsIntegration#secret_access_key}

---

### VaultSecretsIntegrationAwsFederatedWorkloadIdentity <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAwsFederatedWorkloadIdentity {
    string Audience,
    string RoleArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience">Audience</a></code> | <code>string</code> | Audience configured on the AWS IAM identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn">RoleArn</a></code> | <code>string</code> | AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience configured on the AWS IAM identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

AWS IAM role ARN the integration will assume to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#role_arn VaultSecretsIntegration#role_arn}

---

### VaultSecretsIntegrationAzureClientSecret <a name="VaultSecretsIntegrationAzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAzureClientSecret {
    string ClientId,
    string ClientSecret,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientId">ClientId</a></code> | <code>string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Secret value corresponding to the Azure client secret. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.tenantId">TenantId</a></code> | <code>string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Secret value corresponding to the Azure client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#client_secret VaultSecretsIntegration#client_secret}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

### VaultSecretsIntegrationAzureFederatedWorkloadIdentity <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAzureFederatedWorkloadIdentity {
    string Audience,
    string ClientId,
    string TenantId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.audience">Audience</a></code> | <code>string</code> | Audience configured on the Azure federated identity credentials to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.clientId">ClientId</a></code> | <code>string</code> | Azure client ID corresponding to the Azure application. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.tenantId">TenantId</a></code> | <code>string</code> | Azure tenant ID corresponding to the Azure application. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience configured on the Azure federated identity credentials to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Azure client ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#client_id VaultSecretsIntegration#client_id}

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity.property.tenantId"></a>

```csharp
public string TenantId { get; set; }
```

- *Type:* string

Azure tenant ID corresponding to the Azure application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#tenant_id VaultSecretsIntegration#tenant_id}

---

### VaultSecretsIntegrationConfig <a name="VaultSecretsIntegrationConfig" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Capabilities,
    string Name,
    string ProviderType,
    VaultSecretsIntegrationAwsAccessKeys AwsAccessKeys = null,
    VaultSecretsIntegrationAwsFederatedWorkloadIdentity AwsFederatedWorkloadIdentity = null,
    VaultSecretsIntegrationAzureClientSecret AzureClientSecret = null,
    VaultSecretsIntegrationAzureFederatedWorkloadIdentity AzureFederatedWorkloadIdentity = null,
    VaultSecretsIntegrationConfluentStaticCredentials ConfluentStaticCredentials = null,
    VaultSecretsIntegrationGcpFederatedWorkloadIdentity GcpFederatedWorkloadIdentity = null,
    VaultSecretsIntegrationGcpServiceAccountKey GcpServiceAccountKey = null,
    VaultSecretsIntegrationMongodbAtlasStaticCredentials MongodbAtlasStaticCredentials = null,
    string ProjectId = null,
    VaultSecretsIntegrationTwilioStaticCredentials TwilioStaticCredentials = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.capabilities">Capabilities</a></code> | <code>string[]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.name">Name</a></code> | <code>string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.providerType">ProviderType</a></code> | <code>string</code> | The provider or 3rd party platform the integration is for. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsAccessKeys">AwsAccessKeys</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a></code> | AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsFederatedWorkloadIdentity">AwsFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureClientSecret">AzureClientSecret</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a></code> | Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureFederatedWorkloadIdentity">AzureFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.confluentStaticCredentials">ConfluentStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a></code> | Confluent API key used to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpFederatedWorkloadIdentity">GcpFederatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a></code> | (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpServiceAccountKey">GcpServiceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a></code> | GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.mongodbAtlasStaticCredentials">MongodbAtlasStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a></code> | MongoDB Atlas API key used to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.projectId">ProjectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.twilioStaticCredentials">TwilioStaticCredentials</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a></code> | Twilio API key parts used to authenticate against the target Twilio account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.capabilities"></a>

```csharp
public string[] Capabilities { get; set; }
```

- *Type:* string[]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#capabilities VaultSecretsIntegration#capabilities}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#name VaultSecretsIntegration#name}

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.providerType"></a>

```csharp
public string ProviderType { get; set; }
```

- *Type:* string

The provider or 3rd party platform the integration is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#provider_type VaultSecretsIntegration#provider_type}

---

##### `AwsAccessKeys`<sup>Optional</sup> <a name="AwsAccessKeys" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsAccessKeys"></a>

```csharp
public VaultSecretsIntegrationAwsAccessKeys AwsAccessKeys { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeys">VaultSecretsIntegrationAwsAccessKeys</a>

AWS IAM key pair used to authenticate against the target AWS account. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#aws_access_keys VaultSecretsIntegration#aws_access_keys}

---

##### `AwsFederatedWorkloadIdentity`<sup>Optional</sup> <a name="AwsFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.awsFederatedWorkloadIdentity"></a>

```csharp
public VaultSecretsIntegrationAwsFederatedWorkloadIdentity AwsFederatedWorkloadIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentity">VaultSecretsIntegrationAwsFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target AWS account. Cannot be used with `access_keys`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#aws_federated_workload_identity VaultSecretsIntegration#aws_federated_workload_identity}

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureClientSecret"></a>

```csharp
public VaultSecretsIntegrationAzureClientSecret AzureClientSecret { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecret">VaultSecretsIntegrationAzureClientSecret</a>

Azure client secret used to authenticate against the target Azure application. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#azure_client_secret VaultSecretsIntegration#azure_client_secret}

---

##### `AzureFederatedWorkloadIdentity`<sup>Optional</sup> <a name="AzureFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.azureFederatedWorkloadIdentity"></a>

```csharp
public VaultSecretsIntegrationAzureFederatedWorkloadIdentity AzureFederatedWorkloadIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentity">VaultSecretsIntegrationAzureFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target Azure application. Cannot be used with `client_secret`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#azure_federated_workload_identity VaultSecretsIntegration#azure_federated_workload_identity}

---

##### `ConfluentStaticCredentials`<sup>Optional</sup> <a name="ConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.confluentStaticCredentials"></a>

```csharp
public VaultSecretsIntegrationConfluentStaticCredentials ConfluentStaticCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials">VaultSecretsIntegrationConfluentStaticCredentials</a>

Confluent API key used to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#confluent_static_credentials VaultSecretsIntegration#confluent_static_credentials}

---

##### `GcpFederatedWorkloadIdentity`<sup>Optional</sup> <a name="GcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpFederatedWorkloadIdentity"></a>

```csharp
public VaultSecretsIntegrationGcpFederatedWorkloadIdentity GcpFederatedWorkloadIdentity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity">VaultSecretsIntegrationGcpFederatedWorkloadIdentity</a>

(Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#gcp_federated_workload_identity VaultSecretsIntegration#gcp_federated_workload_identity}

---

##### `GcpServiceAccountKey`<sup>Optional</sup> <a name="GcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.gcpServiceAccountKey"></a>

```csharp
public VaultSecretsIntegrationGcpServiceAccountKey GcpServiceAccountKey { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey">VaultSecretsIntegrationGcpServiceAccountKey</a>

GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#gcp_service_account_key VaultSecretsIntegration#gcp_service_account_key}

---

##### `MongodbAtlasStaticCredentials`<sup>Optional</sup> <a name="MongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.mongodbAtlasStaticCredentials"></a>

```csharp
public VaultSecretsIntegrationMongodbAtlasStaticCredentials MongodbAtlasStaticCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials">VaultSecretsIntegrationMongodbAtlasStaticCredentials</a>

MongoDB Atlas API key used to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#mongodb_atlas_static_credentials VaultSecretsIntegration#mongodb_atlas_static_credentials}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#project_id VaultSecretsIntegration#project_id}

---

##### `TwilioStaticCredentials`<sup>Optional</sup> <a name="TwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfig.property.twilioStaticCredentials"></a>

```csharp
public VaultSecretsIntegrationTwilioStaticCredentials TwilioStaticCredentials { get; set; }
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials">VaultSecretsIntegrationTwilioStaticCredentials</a>

Twilio API key parts used to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#twilio_static_credentials VaultSecretsIntegration#twilio_static_credentials}

---

### VaultSecretsIntegrationConfluentStaticCredentials <a name="VaultSecretsIntegrationConfluentStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationConfluentStaticCredentials {
    string CloudApiKeyId,
    string CloudApiSecret
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiKeyId">CloudApiKeyId</a></code> | <code>string</code> | Public key used alongside the private key to authenticate for cloud apis. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiSecret">CloudApiSecret</a></code> | <code>string</code> | Private key used alongside the public key to authenticate for cloud apis. |

---

##### `CloudApiKeyId`<sup>Required</sup> <a name="CloudApiKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiKeyId"></a>

```csharp
public string CloudApiKeyId { get; set; }
```

- *Type:* string

Public key used alongside the private key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#cloud_api_key_id VaultSecretsIntegration#cloud_api_key_id}

---

##### `CloudApiSecret`<sup>Required</sup> <a name="CloudApiSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentials.property.cloudApiSecret"></a>

```csharp
public string CloudApiSecret { get; set; }
```

- *Type:* string

Private key used alongside the public key to authenticate for cloud apis.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#cloud_api_secret VaultSecretsIntegration#cloud_api_secret}

---

### VaultSecretsIntegrationGcpFederatedWorkloadIdentity <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationGcpFederatedWorkloadIdentity {
    string Audience,
    string ServiceAccountEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience">Audience</a></code> | <code>string</code> | Audience configured on the GCP identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities. |

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience configured on the GCP identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#audience VaultSecretsIntegration#audience}

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentity.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; set; }
```

- *Type:* string

GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#service_account_email VaultSecretsIntegration#service_account_email}

---

### VaultSecretsIntegrationGcpServiceAccountKey <a name="VaultSecretsIntegrationGcpServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationGcpServiceAccountKey {
    string Credentials
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials">Credentials</a></code> | <code>string</code> | JSON or base64 encoded service account key received from GCP. |

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKey.property.credentials"></a>

```csharp
public string Credentials { get; set; }
```

- *Type:* string

JSON or base64 encoded service account key received from GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#credentials VaultSecretsIntegration#credentials}

---

### VaultSecretsIntegrationMongodbAtlasStaticCredentials <a name="VaultSecretsIntegrationMongodbAtlasStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationMongodbAtlasStaticCredentials {
    string ApiPrivateKey,
    string ApiPublicKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPrivateKey">ApiPrivateKey</a></code> | <code>string</code> | Private key used alongside the public key to authenticate against the target project. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPublicKey">ApiPublicKey</a></code> | <code>string</code> | Public key used alongside the private key to authenticate against the target project. |

---

##### `ApiPrivateKey`<sup>Required</sup> <a name="ApiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPrivateKey"></a>

```csharp
public string ApiPrivateKey { get; set; }
```

- *Type:* string

Private key used alongside the public key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_private_key VaultSecretsIntegration#api_private_key}

---

##### `ApiPublicKey`<sup>Required</sup> <a name="ApiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentials.property.apiPublicKey"></a>

```csharp
public string ApiPublicKey { get; set; }
```

- *Type:* string

Public key used alongside the private key to authenticate against the target project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_public_key VaultSecretsIntegration#api_public_key}

---

### VaultSecretsIntegrationTwilioStaticCredentials <a name="VaultSecretsIntegrationTwilioStaticCredentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationTwilioStaticCredentials {
    string AccountSid,
    string ApiKeySecret,
    string ApiKeySid
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.accountSid">AccountSid</a></code> | <code>string</code> | Account SID for the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySecret">ApiKeySecret</a></code> | <code>string</code> | Api key secret used with the api key SID to authenticate against the target Twilio account. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySid">ApiKeySid</a></code> | <code>string</code> | Api key SID to authenticate against the target Twilio account. |

---

##### `AccountSid`<sup>Required</sup> <a name="AccountSid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.accountSid"></a>

```csharp
public string AccountSid { get; set; }
```

- *Type:* string

Account SID for the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#account_sid VaultSecretsIntegration#account_sid}

---

##### `ApiKeySecret`<sup>Required</sup> <a name="ApiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySecret"></a>

```csharp
public string ApiKeySecret { get; set; }
```

- *Type:* string

Api key secret used with the api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_key_secret VaultSecretsIntegration#api_key_secret}

---

##### `ApiKeySid`<sup>Required</sup> <a name="ApiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentials.property.apiKeySid"></a>

```csharp
public string ApiKeySid { get; set; }
```

- *Type:* string

Api key SID to authenticate against the target Twilio account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.102.0/docs/resources/vault_secrets_integration#api_key_sid VaultSecretsIntegration#api_key_sid}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationAwsAccessKeysOutputReference <a name="VaultSecretsIntegrationAwsAccessKeysOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAwsAccessKeysOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsAccessKeysOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAwsFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationAzureClientSecretOutputReference <a name="VaultSecretsIntegrationAzureClientSecretOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAzureClientSecretOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureClientSecretOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantIdInput"></a>

```csharp
public string TenantIdInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationAzureFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationConfluentStaticCredentialsOutputReference <a name="VaultSecretsIntegrationConfluentStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationConfluentStaticCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyIdInput">CloudApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecretInput">CloudApiSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyId">CloudApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecret">CloudApiSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudApiKeyIdInput`<sup>Optional</sup> <a name="CloudApiKeyIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyIdInput"></a>

```csharp
public string CloudApiKeyIdInput { get; }
```

- *Type:* string

---

##### `CloudApiSecretInput`<sup>Optional</sup> <a name="CloudApiSecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecretInput"></a>

```csharp
public string CloudApiSecretInput { get; }
```

- *Type:* string

---

##### `CloudApiKeyId`<sup>Required</sup> <a name="CloudApiKeyId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiKeyId"></a>

```csharp
public string CloudApiKeyId { get; }
```

- *Type:* string

---

##### `CloudApiSecret`<sup>Required</sup> <a name="CloudApiSecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.cloudApiSecret"></a>

```csharp
public string CloudApiSecret { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationConfluentStaticCredentialsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput">ServiceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail">ServiceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ServiceAccountEmailInput`<sup>Optional</sup> <a name="ServiceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmailInput"></a>

```csharp
public string ServiceAccountEmailInput { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ServiceAccountEmail`<sup>Required</sup> <a name="ServiceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.serviceAccountEmail"></a>

```csharp
public string ServiceAccountEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpFederatedWorkloadIdentityOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationGcpServiceAccountKeyOutputReference <a name="VaultSecretsIntegrationGcpServiceAccountKeyOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationGcpServiceAccountKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail">ClientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials">Credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientEmail`<sup>Required</sup> <a name="ClientEmail" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.clientEmail"></a>

```csharp
public string ClientEmail { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentialsInput"></a>

```csharp
public string CredentialsInput { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.credentials"></a>

```csharp
public string Credentials { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationGcpServiceAccountKeyOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference <a name="VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKeyInput">ApiPrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKeyInput">ApiPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKey">ApiPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKey">ApiPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiPrivateKeyInput`<sup>Optional</sup> <a name="ApiPrivateKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKeyInput"></a>

```csharp
public string ApiPrivateKeyInput { get; }
```

- *Type:* string

---

##### `ApiPublicKeyInput`<sup>Optional</sup> <a name="ApiPublicKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKeyInput"></a>

```csharp
public string ApiPublicKeyInput { get; }
```

- *Type:* string

---

##### `ApiPrivateKey`<sup>Required</sup> <a name="ApiPrivateKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPrivateKey"></a>

```csharp
public string ApiPrivateKey { get; }
```

- *Type:* string

---

##### `ApiPublicKey`<sup>Required</sup> <a name="ApiPublicKey" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.apiPublicKey"></a>

```csharp
public string ApiPublicKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationMongodbAtlasStaticCredentialsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### VaultSecretsIntegrationTwilioStaticCredentialsOutputReference <a name="VaultSecretsIntegrationTwilioStaticCredentialsOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Hcp;

new VaultSecretsIntegrationTwilioStaticCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSidInput">AccountSidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecretInput">ApiKeySecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySidInput">ApiKeySidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSid">AccountSid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecret">ApiKeySecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySid">ApiKeySid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountSidInput`<sup>Optional</sup> <a name="AccountSidInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSidInput"></a>

```csharp
public string AccountSidInput { get; }
```

- *Type:* string

---

##### `ApiKeySecretInput`<sup>Optional</sup> <a name="ApiKeySecretInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecretInput"></a>

```csharp
public string ApiKeySecretInput { get; }
```

- *Type:* string

---

##### `ApiKeySidInput`<sup>Optional</sup> <a name="ApiKeySidInput" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySidInput"></a>

```csharp
public string ApiKeySidInput { get; }
```

- *Type:* string

---

##### `AccountSid`<sup>Required</sup> <a name="AccountSid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.accountSid"></a>

```csharp
public string AccountSid { get; }
```

- *Type:* string

---

##### `ApiKeySecret`<sup>Required</sup> <a name="ApiKeySecret" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySecret"></a>

```csharp
public string ApiKeySecret { get; }
```

- *Type:* string

---

##### `ApiKeySid`<sup>Required</sup> <a name="ApiKeySid" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.apiKeySid"></a>

```csharp
public string ApiKeySid { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-hcp.vaultSecretsIntegration.VaultSecretsIntegrationTwilioStaticCredentialsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



