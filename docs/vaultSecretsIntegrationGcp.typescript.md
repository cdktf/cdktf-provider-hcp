# `vaultSecretsIntegrationGcp` Submodule <a name="`vaultSecretsIntegrationGcp` Submodule" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VaultSecretsIntegrationGcp <a name="VaultSecretsIntegrationGcp" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp hcp_vault_secrets_integration_gcp}.

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp(scope: Construct, id: string, config: VaultSecretsIntegrationGcpConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig">VaultSecretsIntegrationGcpConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig">VaultSecretsIntegrationGcpConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putFederatedWorkloadIdentity">putFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putServiceAccountKey">putServiceAccountKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetFederatedWorkloadIdentity">resetFederatedWorkloadIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetServiceAccountKey">resetServiceAccountKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFederatedWorkloadIdentity` <a name="putFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putFederatedWorkloadIdentity"></a>

```typescript
public putFederatedWorkloadIdentity(value: VaultSecretsIntegrationGcpFederatedWorkloadIdentityA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putFederatedWorkloadIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA">VaultSecretsIntegrationGcpFederatedWorkloadIdentityA</a>

---

##### `putServiceAccountKey` <a name="putServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putServiceAccountKey"></a>

```typescript
public putServiceAccountKey(value: VaultSecretsIntegrationGcpServiceAccountKeyA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.putServiceAccountKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA">VaultSecretsIntegrationGcpServiceAccountKeyA</a>

---

##### `resetFederatedWorkloadIdentity` <a name="resetFederatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetFederatedWorkloadIdentity"></a>

```typescript
public resetFederatedWorkloadIdentity(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetServiceAccountKey` <a name="resetServiceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.resetServiceAccountKey"></a>

```typescript
public resetServiceAccountKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VaultSecretsIntegrationGcp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isConstruct"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformElement"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformResource"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VaultSecretsIntegrationGcp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VaultSecretsIntegrationGcp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VaultSecretsIntegrationGcp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VaultSecretsIntegrationGcp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.organizationId">organizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKey">serviceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentityInput">federatedWorkloadIdentityInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA">VaultSecretsIntegrationGcpFederatedWorkloadIdentityA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKeyInput">serviceAccountKeyInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA">VaultSecretsIntegrationGcpServiceAccountKeyA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `federatedWorkloadIdentity`<sup>Required</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentity"></a>

```typescript
public readonly federatedWorkloadIdentity: VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference">VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference</a>

---

##### `organizationId`<sup>Required</sup> <a name="organizationId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.organizationId"></a>

```typescript
public readonly organizationId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `serviceAccountKey`<sup>Required</sup> <a name="serviceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKey"></a>

```typescript
public readonly serviceAccountKey: VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference">VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference</a>

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `federatedWorkloadIdentityInput`<sup>Optional</sup> <a name="federatedWorkloadIdentityInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.federatedWorkloadIdentityInput"></a>

```typescript
public readonly federatedWorkloadIdentityInput: IResolvable | VaultSecretsIntegrationGcpFederatedWorkloadIdentityA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA">VaultSecretsIntegrationGcpFederatedWorkloadIdentityA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `serviceAccountKeyInput`<sup>Optional</sup> <a name="serviceAccountKeyInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.serviceAccountKeyInput"></a>

```typescript
public readonly serviceAccountKeyInput: IResolvable | VaultSecretsIntegrationGcpServiceAccountKeyA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA">VaultSecretsIntegrationGcpServiceAccountKeyA</a>

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VaultSecretsIntegrationGcpConfig <a name="VaultSecretsIntegrationGcpConfig" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.Initializer"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationGcpConfig: vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.name">name</a></code> | <code>string</code> | The Vault Secrets integration name. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.federatedWorkloadIdentity">federatedWorkloadIdentity</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA">VaultSecretsIntegrationGcpFederatedWorkloadIdentityA</a></code> | (Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.projectId">projectId</a></code> | <code>string</code> | HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.serviceAccountKey">serviceAccountKey</a></code> | <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA">VaultSecretsIntegrationGcpServiceAccountKeyA</a></code> | GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Capabilities enabled for the integration. See the Vault Secrets documentation for the list of supported capabilities per provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#capabilities VaultSecretsIntegrationGcp#capabilities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Vault Secrets integration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#name VaultSecretsIntegrationGcp#name}

---

##### `federatedWorkloadIdentity`<sup>Optional</sup> <a name="federatedWorkloadIdentity" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.federatedWorkloadIdentity"></a>

```typescript
public readonly federatedWorkloadIdentity: VaultSecretsIntegrationGcpFederatedWorkloadIdentityA;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA">VaultSecretsIntegrationGcpFederatedWorkloadIdentityA</a>

(Recommended) Federated identity configuration to authenticate against the target GCP project. Cannot be used with `service_account_key`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#federated_workload_identity VaultSecretsIntegrationGcp#federated_workload_identity}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

HCP project ID that owns the HCP Vault Secrets integration. Inferred from the provider configuration if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#project_id VaultSecretsIntegrationGcp#project_id}

---

##### `serviceAccountKey`<sup>Optional</sup> <a name="serviceAccountKey" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpConfig.property.serviceAccountKey"></a>

```typescript
public readonly serviceAccountKey: VaultSecretsIntegrationGcpServiceAccountKeyA;
```

- *Type:* <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA">VaultSecretsIntegrationGcpServiceAccountKeyA</a>

GCP service account key used to authenticate against the target GCP project. Cannot be used with `federated_workload_identity`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#service_account_key VaultSecretsIntegrationGcp#service_account_key}

---

### VaultSecretsIntegrationGcpFederatedWorkloadIdentityA <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentityA" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA.Initializer"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationGcpFederatedWorkloadIdentityA: vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA.property.audience">audience</a></code> | <code>string</code> | Audience configured on the GCP identity provider to federate access with HCP. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities. |

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

Audience configured on the GCP identity provider to federate access with HCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#audience VaultSecretsIntegrationGcp#audience}

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

GCP service account email that HVS will impersonate to carry operations for the appropriate capabilities.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#service_account_email VaultSecretsIntegrationGcp#service_account_email}

---

### VaultSecretsIntegrationGcpServiceAccountKeyA <a name="VaultSecretsIntegrationGcpServiceAccountKeyA" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA.Initializer"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

const vaultSecretsIntegrationGcpServiceAccountKeyA: vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA.property.credentials">credentials</a></code> | <code>string</code> | JSON or base64 encoded service account key received from GCP. |

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

JSON or base64 encoded service account key received from GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/hcp/0.108.0/docs/resources/vault_secrets_integration_gcp#credentials VaultSecretsIntegrationGcp#credentials}

---

## Classes <a name="Classes" id="Classes"></a>

### VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference <a name="VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.audienceInput">audienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.audience">audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA">VaultSecretsIntegrationGcpFederatedWorkloadIdentityA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.audienceInput"></a>

```typescript
public readonly audienceInput: string;
```

- *Type:* string

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.audience"></a>

```typescript
public readonly audience: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationGcpFederatedWorkloadIdentityA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpFederatedWorkloadIdentityA">VaultSecretsIntegrationGcpFederatedWorkloadIdentityA</a>

---


### VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference <a name="VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.Initializer"></a>

```typescript
import { vaultSecretsIntegrationGcp } from '@cdktf/provider-hcp'

new vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.clientEmail">clientEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.credentials">credentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA">VaultSecretsIntegrationGcpServiceAccountKeyA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientEmail`<sup>Required</sup> <a name="clientEmail" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.clientEmail"></a>

```typescript
public readonly clientEmail: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.credentialsInput"></a>

```typescript
public readonly credentialsInput: string;
```

- *Type:* string

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.credentials"></a>

```typescript
public readonly credentials: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VaultSecretsIntegrationGcpServiceAccountKeyA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-hcp.vaultSecretsIntegrationGcp.VaultSecretsIntegrationGcpServiceAccountKeyA">VaultSecretsIntegrationGcpServiceAccountKeyA</a>

---



